import { useState } from 'react'
import { appConfig } from '../utils/appConfig.js'

// Header Modular Homes con menú horizontal y responsive
// Variables: logoUrl = ruta logo, mobileMenuOpen = estado menú mobile, navLinks = array navegación
function Header({ themeMode, onToggleTheme, searchQuery, onSearchChange }) {
  const { logoUrl } = appConfig
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Inicio', href: '#instructions' },
    { label: 'Solicitar presupuestos', href: '#requests' },
    { label: 'Ofertas de proveedores', href: '#offers' },
  ]

  return (
    <header className="header-modular ">
      <div className="header-container ">
        {/* Logo e identificación a la izquierda */}
        <div className="header-brand">
          {logoUrl ? (
            <img className="header-logo" src={logoUrl} alt="Modular Homes" />
          ) : (
            <div className="header-logo-placeholder">MH</div>
          )}
          <div className="header-title">
            <h1>Modular Homes</h1>
            <p>Presupuestos y Ofertas</p>
          </div>
        </div>

        {/* Menú horizontal desktop */}
        <nav className="header-nav-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link  ">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Acciones a la derecha: búsqueda, tema, menú mobile */}
        <div className="header-actions">
          <div className="search-field-header">
            <input
              aria-label="Buscar pedidos"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              className="header-search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          {/* <button 
            className="theme-toggle" 
            onClick={onToggleTheme}
            aria-label="Cambiar tema"
            type="button"
          >
            {themeMode === 'dark' ? '☀️' : '🌙'}
          </button> */}

          {/* Botón hamburguesa para menú mobile */}
          <button
            className="menu-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
            type="button"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menú mobile - se muestra solo en móvil */}
      {mobileMenuOpen && (
        <nav className="header-nav-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
