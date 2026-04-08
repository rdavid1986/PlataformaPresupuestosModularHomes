import { useEffect, useState } from 'react';
import "../App.css";               
import "../styles/requestCard.css";
import { parseAttachments } from '../utils/parseAttachments';
import OfferCard from './OfferCard';

// Renderiza card de un pedido de presupuesto con su información y ofertas asociadas
// Variables: request = objeto pedido, associatedOffers = array de ofertas vinculadas a este pedido
function RequestCard({ request, associatedOffers = [] }) {
  const attachments = parseAttachments(request.attachments);

  return (
    <article className="request-card">
      <header className="request-header">
        <h1 className="associated-offers-header">
          Pedido de presupuesto:
        </h1>
          
        <p className="request-id">ID: {request.id}</p>
      </header>

      <div className="request-details-grid ">
        {<div className="request-detail-item full-width">
          <span className="detail-label">Nombre de Empresa</span>
          <p className="personalized-font-size">{request.contact || "Sin empresa especificada"}</p>
        </div>}
        

        <div className="detail-item">
          <span className="detail-label ">Titulo del pedido</span>
          <p>{request.projectName || "Sin empresa especificada"}</p>
        </div>

        <div className="detail-item">
          <span className="detail-label">Fecha y hora de creación</span>
          <p>{request.createdAt || 'Sin fecha'}</p>
        </div>

        <div className="detail-item">
          <span className="detail-label">Descripción</span>
          <p>{request.description || 'Sin descripción'}</p>
        </div>
        
        <div className="detail-item wide">
          <span className="detail-label">Adjuntos</span>
          {attachments.length > 0 ? (
            <div className="attachment-list">
              {attachments.map((link, index) => (
                
                <a
                  key={`${request.id}-att-${index}`}
                  href={link}   // 👈 aquí va el link de la columna F
                  target="_blank"
                  rel="noreferrer"
                  className="attachment-link-item"
                >
                  Archivo {index + 1}
                </a>
              ))}
            </div>
          ) : (
            <p>Sin archivos adjuntos</p>
          )}
        </div>
      </div>

      {associatedOffers.length > 0 && (
        <div className="associated-offers-section">
          <div className="associated-offers-header justify-content-right">
            <h4>Ofertas relacionadas ({associatedOffers.length})</h4>
          </div>
          <div className="associated-offers-list margin-left">
            {associatedOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} inline={true} />
            ))}
          </div>
        </div>
      )}

      <footer className="request-footer">
        <button
          className="create-offer-button"
          onClick={() => {
             window.open(request.offerFormLink) 
          }}
        >
          Crear oferta
        </button>
      </footer>
    </article>
  );
}

export default RequestCard;
