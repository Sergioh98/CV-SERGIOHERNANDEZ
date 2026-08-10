import { whatsappUrl } from '../../utils/menuHelpers'

// Boton de pedido por WhatsApp compartido por los 3 menus. El mensaje
// llega ya armado (incluye el nombre del producto/restaurante) para
// que el pedido se abra con el texto pre-escrito, como en Tienda.
function WhatsAppOrderButton({ numero, mensaje, children = 'Pedir por WhatsApp', className = '' }) {
  return (
    <a
      className={`btn-whatsapp ${className}`.trim()}
      href={whatsappUrl(numero, mensaje)}
      target="_blank"
      rel="noreferrer"
    >
      <i className="ri-whatsapp-line" aria-hidden="true" />
      {children}
    </a>
  )
}

export default WhatsAppOrderButton
