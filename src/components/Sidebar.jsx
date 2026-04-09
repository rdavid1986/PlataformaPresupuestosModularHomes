import "../styles/offerCard.css";
import { appConfig } from '../utils/appConfig.js'

function Sidebar() {
  const { logoUrl } = appConfig
  const { ModularHomesUrl } = appConfig
  return (
    <aside className="sidebar sidebar-nav-link">
        <div className="display">
          {logoUrl ? (
            <img className="header-logo" src={logoUrl} alt="Modular Homes" />
          ) : (
            <div className="header-logo-placeholder">MH</div>
          )}
          <br />
            <p>Modular Homes</p>
            <p>Presupuestos y Ofertas</p>
          
        </div>

      <nav className="sidebar-nav" aria-label="Navegación secundaria">
        <a href="#instructions" className="sidebar-nav-link">
          Inicio
        </a>
        <a href="#requests" className="sidebar-nav-link">
          Solicitar presupuesto
        </a>
        <a href="#offers" className="sidebar-nav-link">
          Ofertas
        </a>
        <a href="#aboutUs" className="sidebar-nav-link">
            Sobre nosotros
        </a>
      </nav>
      

      <div className="sidebar-footer">
        
        <a className="button create-offer-button cta-button" href="https://docs.google.com/forms/d/e/1FAIpQLScYToCNvXaOpi6o8jSNBmkpDo0XATNkRhZD-XaFXH5fL15UWg/viewform?usp=dialog" target="_blank" rel="noreferrer">
          Crear pedido de presupuesto
        </a>
      </div>
    </aside>
  )}

export default Sidebar       