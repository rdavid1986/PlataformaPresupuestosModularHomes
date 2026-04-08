// ================================================
// URLS HARDCODEADAS - Google Sheets
// ================================================

const SHEET_CONFIG = {
  //URL donde se piden los datos de los pedidos de presupuesto
  requestsJsonUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2PeHQZZ7WgM394fuznjacwgMP2yZmkLfQWLbSAV683PuR-WZHfHQ_xbhTbuja3_x_HKdvvMs2qsDn/pub?output=csv',
  //URL donde se piden los datos de los pedidos de presupuesto
  offersJsonUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQht3PHFRExhTv0mUkZpZFft7qSduqUu7tS3wX3_AKmiMrUe_JlT9lGSiB-1B38G4F8N2BIKzp0tF9V/pub?output=csv',
 //URL formulario de de crear pedido de presupuesto
  requestFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYToCNvXaOpi6o8jSNBmkpDo0XATNkRhZD-XaFXH5fL15UWg/viewform?usp=dialog',
  //URL de formulario de crear oferta
  offerFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfFd3tG-pb3VW8geieQPN5XdbASvWgVsNKx_xU434DDIZCwBg/viewform?usp=dialog',
};

// Convierte valor null/undefined a string vacío, útil para datos de Google Sheets
// Variables: value = cualquier valor que puede ser null/undefined
const safeString = (value) => {
  if (value === undefined || value === null) return '';
  return String(value).trim();
};

// Parsea una línea CSV respetando comillas para valores con comas
// Variables: line = string de una fila CSV con posibles campos entrecomillados
const splitCsvLine = (line) => {
  const values = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
      else { inQuotes = !inQuotes; }
      continue;
    }
    if (char === ',' && !inQuotes) { values.push(current); current = ''; continue; }
    current += char;
  }
  values.push(current);
  return values.map((v) => {
    const trimmed = v.trim();
    if (trimmed.startsWith('"') && trimmed.endsWith('"')) return trimmed.slice(1, -1).trim();
    return trimmed;
  });
};

// Convierte string CSV a array de objetos (headers como claves, valores en filas)
// Variables: csvText = string con contenido CSV completo (headers + datos)
const parseCsvToObjects = (csvText) => {
  const lines = csvText.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = splitCsvLine(lines[0]).map((h) => h.replace(/^"|"$/g, '').trim());

  return lines.slice(1)
    .filter(line => line.trim() !== '' && !/^,+$/.test(line)) // elimina filas vacías
    .filter(line => {
      // elimina filas que son exactamente iguales a los encabezados
      const values = splitCsvLine(line);
      return !values.every((v, i) => v.trim() === headers[i]);
    })
    .map((line) => {
      const values = splitCsvLine(line);
      return headers.reduce((row, header, index) => {
        row[header.trim()] = values[index] || '';
        return row;
      }, {});
    });
};

// Obtiene datos CSV desde URL de Google Sheets y los parsea a objetos
// Variables: url = URL exportación CSV de Google Sheets (formato ?output=csv)
const fetchRawSheet = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unable to load sheet data: ${response.statusText}`);
  const text = await response.text();
  const trimmed = text.trim();
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) return JSON.parse(trimmed);
  return parseCsvToObjects(text);
};

// Normaliza datos de pedidos desde Google Sheets: mapea columnas a estructura unificada
// Variables: rawRequests = array de objetos raw con columnas de Google Sheets
const normalizeRequests = (rawRequests) => {
  if (!Array.isArray(rawRequests)) return [];
  return rawRequests.map((row, index) => ({
    deadline: safeString(row['Hora y fecha'] || row['Marca temporal'] || ''),
    id: safeString(row['ID Pedido'] || `PED-${index + 1}`),
    projectName: safeString(row['Título del pedido'] || 'Nuevo pedido'),
    description: safeString(row['Descripción'] || ''),
    createdAt: safeString(row['Hora y fecha'] || row['Marca temporal'] || ''),
    contact: safeString(row['Nombre de la empresa'] || ''),
    attachments: safeString(row['Excel'] || ''),
    offerFormLink: safeString(row['Crear oferta'] || ''),
    status: 'Abierto',
  })).filter((r) => r.id.length > 0);
};

// Normaliza datos de ofertas desde Google Sheets: mapea columnas a estructura unificada
// Variables: rawOffers = array de objetos raw con columnas de Google Sheets
const normalizeOffers = (rawOffers) => {
  if (!Array.isArray(rawOffers)) return [];
  return rawOffers.map((row, index) => ({
    id: safeString(row['ID Oferta'] || `OFF-${index + 1}`),
    requestID: safeString(row['ID Pedido relacionado'] || ''),
    provider: safeString(row['Nombre de la empresa que oferta'] || ''),
    projectName: safeString(row['Titulo de la oferta'] || ''),
    date: safeString(row['Hora'] || ''),
    attachments: safeString(row['Excel con la oferta'] || ''),
    notes: safeString(row['Ofertas relacionadas'] || ''),
  })).filter((o) => o.id);
};

// Elimina duplicados de pedidos usando Map con clave ID o projectName+fecha
// Variables: requests = array de pedidos que puede contener duplicados
const dedupeRequests = (requests) => {
  const map = new Map();
  requests.forEach((r) => {
    const key = r.id || `${r.projectName}-${r.createdAt}`;
    if (!map.has(key)) map.set(key, r);
  });
  return Array.from(map.values());
};

// Obtiene todos los pedidos desde Google Sheets, normaliza y elimina duplicados
// Variables: Ninguna (lee de SHEET_CONFIG.requestsJsonUrl)
export const fetchRequests = async () => {
  const rawRequests = await fetchRawSheet(SHEET_CONFIG.requestsJsonUrl);
  if (rawRequests.length > 0) {
    console.log('Encabezados pedidos log de fetch request:', Object.keys(rawRequests[0]));
    console.log('Primera fila pedido log de fetch request:', rawRequests[0]);
  }
  return dedupeRequests(normalizeRequests(rawRequests));
};

// Obtiene todas las ofertas desde Google Sheets y las normaliza
// Variables: Ninguna (lee de SHEET_CONFIG.offersJsonUrl)
export const fetchAllOffers = async () => {
  const rawOffers = await fetchRawSheet(SHEET_CONFIG.offersJsonUrl);
  if (rawOffers.length > 0) {
    console.log('Encabezados ofertas:', Object.keys(rawOffers[0]));
    console.log('Primera fila oferta:', rawOffers[0]);
  }
  return normalizeOffers(rawOffers);
};

// Obtiene ofertas asociadas a un pedido específico filtrando por ID Pedido relacionado
// Variables: requestID = ID del pedido (ej: "PED-000001")
export const fetchOffers = async (requestID) => {
  const allOffers = await fetchAllOffers();
  return allOffers.filter((o) => String(o.requestID) === String(requestID));
};

// Obtiene URL de formulario para crear nuevos pedidos
// Variables: Ninguna (retorna string URL hardcodeada)
export const getRequestFormUrl = () => SHEET_CONFIG.requestFormUrl;

// Obtiene URL de formulario genérico para crear ofertas independientes
// Variables: Ninguna (retorna string URL hardcodeada)
export const getGenericOfferFormUrl = () => SHEET_CONFIG.offerFormUrl;
