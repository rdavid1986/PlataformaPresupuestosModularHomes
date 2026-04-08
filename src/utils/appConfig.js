const env = import.meta.env

const getEnv = (key, fallback = '') => env[key] ?? fallback

// Base dinámica de Vite (incluye nombre del repo en producción)
const base = import.meta.env.BASE_URL

// Helper para evitar rutas absolutas que rompen en GitHub Pages
const withBase = (path) => {
  if (!path) return ''
  // Si ya es URL completa, no modificar
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  // Quitar "/" inicial si existe y concatenar base
  return `${base}${path.replace(/^\/+/, '')}`
}

export const appConfig = {
  logoUrl: withBase(getEnv('VITE_LOGO_URL', 'logo/Logo.png')),
  ModularHomesUrl: withBase(getEnv('VITE_MODULAR_HOMES_URL', 'logo/ModularHomes.png')),
  LogoModularHomesUrl: withBase(getEnv('VITE_LOGO_MODULAR_HOMES_URL', 'logo/Logo-ModularHomes.png')),

  requestFormUrl: getEnv('VITE_FORM_REQUEST_URL', ''),
  sheetRequestsUrl: getEnv('VITE_SHEET_REQUESTS_URL', ''),
  sheetOffersUrl: getEnv('VITE_SHEET_OFFERS_URL', ''),

  contactAddress: getEnv('VITE_CONTACT_ADDRESS', 'Dirección no configurada'),
  contactPhone: getEnv('VITE_CONTACT_PHONE', 'Teléfono no configurado'),
  contactEmail: getEnv('VITE_CONTACT_EMAIL', 'Email no configurado'),

  companyWebsite: getEnv('VITE_COMPANY_WEBSITE', 'https://www.ejemplo.com'),
  companySocial: getEnv('VITE_COMPANY_SOCIAL', 'https://www.linkedin.com'),
}

export const getThemeVars = (mode = 'light') => {
  const prefix = mode === 'dark' ? 'VITE_DARK_' : 'VITE_'
  return {
    '--color-bg': getEnv(`${prefix}COLOR_BG`, mode === 'dark' ? '#0d1f33' : '#dae4ed'),
    '--color-panel': getEnv(`${prefix}COLOR_PANEL`, mode === 'dark' ? '#1a2a3f' : '#2f4158'),
    '--color-card': getEnv(`${prefix}COLOR_CARD`, mode === 'dark' ? '#162436' : '#ffffff'),
    '--color-text': getEnv(`${prefix}COLOR_TEXT`, mode === 'dark' ? '#e5f0f9' : '#172337'),
    '--color-text-muted': getEnv(`${prefix}COLOR_TEXT_MUTED`, mode === 'dark' ? '#a9b6cc' : '#4b5563'),
    '--color-border': getEnv(`${prefix}COLOR_BORDER`, mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(9, 30, 66, 0.08)'),
    '--color-accent': getEnv(`${prefix}COLOR_ACCENT`, mode === 'dark' ? '#00a0ff' : '#2f6ad6'),
    '--color-accent-soft': getEnv(`${prefix}COLOR_ACCENT_SOFT`, mode === 'dark' ? 'rgba(0, 160, 255, 0.16)' : 'rgba(47, 106, 214, 0.18)'),
    '--color-panel-alt': getEnv(`${prefix}COLOR_PANEL_ALT`, mode === 'dark' ? '#142030' : '#f7f8fb'),
    '--color-card-alt': getEnv(`${prefix}COLOR_CARD_ALT`, mode === 'dark' ? '#1a2f45' : '#f8fafc'),
    '--color-footer': getEnv(`${prefix}COLOR_FOOTER`, mode === 'dark' ? '#0a1729' : '#ffffff'),
    '--color-footer-text': getEnv(`${prefix}COLOR_FOOTER_TEXT`, mode === 'dark' ? '#cbd6e8' : '#5d6680'),
  }
}