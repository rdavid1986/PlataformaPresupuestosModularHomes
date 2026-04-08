// → Parsea string de adjuntos (CSV) en array de URLs válidas
// Variables: attachmentsString:string = contenido del campo "Excel pedido" o "Excel oferta" con múltiples URLs separadas por ;, \n o ,
export const parseAttachments = (attachmentsString) => {
  return (attachmentsString || '')
    .split(/;|\n|,/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
};
