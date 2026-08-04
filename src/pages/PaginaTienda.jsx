import { productos, categoriasProductos, contactoTienda } from '../data/tienda'

const formatoPrecio = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})

function enlaceWhatsappProducto(producto) {
  const mensaje = `Hola, quiero información sobre: ${producto.nombre}`
  return `https://wa.me/${contactoTienda.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

// PaginaTienda muestra el catalogo de celulares y accesorios agrupado
// por categoria. Cada producto tiene su propio boton de WhatsApp con
// un mensaje pre-armado, igual que el flujo de pedidos por WhatsApp de
// valledupar-tourism.
function PaginaTienda() {
  return (
    <div className="page-wrap">
      <main className="pagina-servicio">
        <header className="pagina-servicio__hero pagina-servicio__hero--tienda">
          <i className="ri-store-2-line" aria-hidden="true" />
          <h1>Tienda de celulares y accesorios</h1>
          <p>Equipos verificados y accesorios originales, con atención directa por WhatsApp.</p>
          <a
            className="btn-social btn-social--primario"
            href={`https://wa.me/${contactoTienda.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-whatsapp-line" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
        </header>

        {categoriasProductos.map((categoria) => (
          <section className="section-box" key={categoria}>
            <h2 className="pagina-servicio__categoria">{categoria}</h2>
            <div className="productos-grid">
              {productos
                .filter((producto) => producto.categoria === categoria)
                .map((producto) => (
                  <article className="producto-card" key={producto.id}>
                    {producto.destacado && <span className="producto-card__badge">Destacado</span>}
                    <h3>{producto.nombre}</h3>
                    <p className="producto-card__precio">{formatoPrecio.format(producto.precio)}</p>
                    <p className="producto-card__descripcion">{producto.descripcion}</p>
                    <a
                      className="btn-social btn-social--primario"
                      href={enlaceWhatsappProducto(producto)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-whatsapp-line" aria-hidden="true" />
                      Pedir por WhatsApp
                    </a>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default PaginaTienda
