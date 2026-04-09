import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/welcomeModal.css';

function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      // Si el hash es #instructions o está vacío, mostrar el modal
      const shouldOpen = hash === '#instructions' || hash === '' || hash === '#';
      console.log('WelcomeModal: hash=', hash, 'shouldOpen=', shouldOpen); // Debug
      setIsOpen(shouldOpen);
    };

    // Chequear inmediatamente
    checkHash();
    
    // Chequear cuando cambia el hash
    window.addEventListener('hashchange', checkHash);
    
    // Chequear después de un pequeño delay (por si hay problema de timing)
    const timer = setTimeout(checkHash, 100);

    return () => {
      window.removeEventListener('hashchange', checkHash);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  // Render en portal para asegurar que siempre esté por encima de todo
  return ReactDOM.createPortal(
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
    </div>,
    document.body
  );
}

export default WelcomeModal;