import WhatsAppOrderButton from './WhatsAppOrderButton'
import { formatoPrecioCOP, precioDesde } from '../../utils/menuHelpers'

// ProductCard cubre 2 casos reales del menú: producto CON foto propia
// (imagen real) y producto SIN foto (la mayoría — café, panadería,
// sándwiches...). Para el segundo caso, en vez de un ícono chiquito en
// caja plana se usa un degradado de marca a pantalla completa de la
// card — se ve como un "producto destacado" aunque no haya foto real.
function ProductCard({ producto, whatsapp, nombreRestaurante, colorGradiente }) {
  const precio = precioDesde(producto)
  const tienePrecioDesde = Boolean(producto.variantes && producto.variantes.length > 0)
  const mensaje = `Hola, quiero pedir: ${producto.nombre}${nombreRestaurante ? ' — ' + nombreRestaurante : ''}`

  return (
    <article className="menu-card">
      <div
        className="menu-card__imagen"
        style={!producto.imagen && colorGradiente ? { background: `linear-gradient(135deg, ${colorGradiente[0]}, ${colorGradiente[1]})` } : undefined}
      >
        {producto.imagen ? (
          <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
        ) : (
          <i className="ri-restaurant-2-line" aria-hidden="true" />
        )}
        {producto.destacado && <span className="menu-card__badge">Destacado</span>}
      </div>

      <div className="menu-card__cuerpo">
        <h3>{producto.nombre}</h3>
        {producto.descripcion && <p className="menu-card__descripcion">{producto.descripcion}</p>}

        <div className="menu-card__pie">
          <span className="menu-card__precio">
            {tienePrecioDesde && <small>Desde </small>}
            {formatoPrecioCOP.format(precio)}
          </span>
          <WhatsAppOrderButton numero={whatsapp} mensaje={mensaje} className="menu-card__boton">
            Pedir
          </WhatsAppOrderButton>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
