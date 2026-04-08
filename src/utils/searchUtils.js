/**
 * Normaliza y prepara un query de búsqueda
 * @param {string} query - El texto a buscar
 * @returns {string[]} Array de palabras clave en minúsculas
 */
const normalizeQuery = (query) => {
  if (!query) return []
  return query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
}

/**
 * Verifica si un texto coincide exactamente con las palabras clave (búsqueda por palabras completas, case-insensitive)
 * @param {string} text - El texto a verificar
 * @param {string[]} keywords - Palabras clave a buscar
 * @returns {boolean} True si todas las palabras aparecen como palabras completas en el texto
 */
const matchesAllKeywords = (text, keywords) => {
  if (!text) return false
  const normalizedText = text.toLowerCase()
  
  // Crear palabras completas del texto (separadas por espacios y caracteres especiales)
  const textWords = normalizedText.match(/\b\w+\b/g) || []
  
  // Verificar que cada keyword aparezca como palabra completa
  return keywords.every((keyword) => {
    // Permitir búsqueda exacta de caracteres especiales también (para casos como "test-case")
    return normalizedText.includes(keyword) && (
      textWords.includes(keyword) ||
      new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(normalizedText)
    )
  })
}

/**
 * Extrae nombres de archivos desde string de adjuntos (formato: url1|url2|url3)
 * @param {string} attachments - String con URLs separadas por |
 * @returns {string} String con nombres de archivo
 */
const extractAttachmentNames = (attachments) => {
  if (!attachments) return ''
  return attachments
    .split('|')
    .map((url) => {
      try {
        const filename = decodeURIComponent(url.split('/').pop().split('?')[0])
        return filename
      } catch {
        return url.split('/').pop().split('?')[0]
      }
    })
    .join(' ')
}

/**
 * Busca en pedidos de presupuesto
 * @param {string} query - Texto a buscar
 * @param {Array} requests - Array de pedidos
 * @returns {Array} Pedidos que coinciden con la búsqueda
 */
export const searchRequests = (query, requests) => {
  if (!query || !requests) return requests || []

  const keywords = normalizeQuery(query)
  if (keywords.length === 0) return requests

  return requests.filter((request) => {
    const searchableText = [
      request.id || '',
      request.contact || '', // Nombre de empresa
      request.projectName || '', // Título del pedido
      request.description || '', // Descripción
      request.status || '', // Estado/Status
      extractAttachmentNames(request.attachments),
    ].join(' ')

    return matchesAllKeywords(searchableText, keywords)
  })
}

/**
 * Busca en ofertas
 * @param {string} query - Texto a buscar
 * @param {Array} offers - Array de ofertas
 * @returns {Array} Ofertas que coinciden con la búsqueda
 */
export const searchOffers = (query, offers) => {
  if (!query || !offers) return offers || []

  const keywords = normalizeQuery(query)
  if (keywords.length === 0) return offers

  return offers.filter((offer) => {
    const searchableText = [
      offer.id || '',
      offer.provider || '', // Empresa/Proveedor
      offer.projectName || '', // Nombre proyecto
      offer.notes || '', // Notas
      extractAttachmentNames(offer.attachments),
    ].join(' ')

    return matchesAllKeywords(searchableText, keywords)
  })
}

/**
 * Busca simultáneamente en pedidos y ofertas
 * @param {string} query - Texto a buscar
 * @param {Array} requests - Array de pedidos
 * @param {Array} offers - Array de ofertas
 * @returns {Object} {filteredRequests, filteredOffers}
 */
export const searchAll = (query, requests, offers) => {
  return {
    filteredRequests: searchRequests(query, requests),
    filteredOffers: searchOffers(query, offers),
  }
}
