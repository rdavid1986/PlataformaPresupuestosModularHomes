import { useEffect, useState } from 'react'
import '../styles/welcomeModal.css'

function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Mostrar modal solo si no se ha visto antes (usando localStorage)
    const hasSeenWelcome = localStorage.getItem('welcome-modal-seen')
    if (!hasSeenWelcome) {
      setIsOpen(true)
      localStorage.setItem('welcome-modal-seen', 'true')
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="welcome-modal-overlay" onClick={handleClose}>
      <div className="welcome-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="welcome-modal-close" onClick={handleClose}>×</button>
        
        <div className="welcome-modal-header">
          <h1>¡Bienvenidos!</h1>
        </div>

        <div className="welcome-modal-body">
          <p className="welcome-modal-text">
            Prueba de ejemplo y demostración de la <strong>plataforma de pedidos de Modular Homes</strong>
          </p>
          
          <div className="welcome-modal-features">
            <div className="feature-item">
              <span className="feature-icon">📋</span>
              <p>Solicitudes de presupuesto centralizadas</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💼</span>
              <p>Ofertas de proveedores organizadas</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <p>Gestión eficiente de procesos</p>
            </div>
          </div>
        </div>

        <div className="welcome-modal-footer">
          <button className="welcome-modal-button" onClick={handleClose}>
            Comenzar →
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal
