import React from "react";
import "../styles/offerCard.css";
import "../styles/requestCard.css";
import { parseAttachments } from "../utils/parseAttachments";

// Renderiza card de una oferta, puede ser standalone o inline (dentro de un pedido)
// Variables: offer = objeto oferta con { id, requestID, provider, projectName, date, attachments, notes }, inline = boolean para renderado compacto
function OfferCard({ offer, inline = false }) {
  const attachments = parseAttachments(offer.attachments);

  const cardClass = inline ? "offer-card inline" : "offer-card";

  return (
    <article className={cardClass}>
      <header className="offer-header">
        <h1>Oferta : {offer.projectName || "Sin Titulo"}</h1>
        <br />
        <p className="offer-id">ID Oferta: {offer.id}</p>
        
      </header>

      <div className="offer-details-grid">
        <div className="offer-detail-item full-width">
          <span className="detail-label ">Proveedor / Empresa</span>
          <p className="personalized-font-size">{offer.provider || "Sin proveedor especificado"}</p>
        </div>
        <div className="offer-detail-item">
          <span className="detail-label">Título del pedido</span>
          <p>{offer.projectName || "Sin título especificado"}</p>
        </div>
        <div className="offer-detail-item">
          <span className="detail-label">Fecha de Oferta</span>
          <p>{offer.date || "Sin fecha"}</p>
        </div>
        <div className="offer-detail-item ">
          <span className="detail-label">Adjuntos</span>
          {attachments.length > 0 ? (
            <div className="attachment-list">
              {attachments.map((link, index) => (
                <a
                  key={`${offer.id}-${index}`}
                  href={link}
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
        <div className="offer-detail-item">
          <span className="detail-label">Notas / Ofertas relacionadas</span>
          <p>{offer.notes || "Sin notas adicionales"}</p>
        </div>
      </div>
    </article>
  );
}

export default OfferCard;
