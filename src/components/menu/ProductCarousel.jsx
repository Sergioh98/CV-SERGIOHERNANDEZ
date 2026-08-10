import { useEffect, useRef, useState } from 'react'
import WhatsAppOrderButton from './WhatsAppOrderButton'
import { formatoPrecioCOP } from '../../utils/menuHelpers'

// ProductCarousel: pedido explícito del cliente — un producto a la vez,
// la foto "desliza" hacia un lado al cambiar y las especificaciones
// (nombre, descripción, precio/tamaños) aparecen debajo. Nada de grid
// de tarjetas apiladas. Funciona con flechas, puntos, y swipe táctil.
function ProductCarousel({ productos, whatsapp, nombreRestaurante, coloresPorCategoria, fotosPorCategoria }) {
  const [indice, setIndice] = useState(0)
  const inicioSwipe = useRef(null)

  useEffect(() => {
    setIndice(0)
  }, [productos])

  if (productos.length === 0) {
    return <p className="menu-carrusel__vacio">Aún no hay productos en esta categoría.</p>
  }

  const total = productos.length
  const producto = productos[Math.min(indice, total - 1)]
  const mensaje = `Hola, quiero pedir: ${producto.nombre}${nombreRestaurante ? ' — ' + nombreRestaurante : ''}`

  const irA = (nuevoIndice) => setIndice((nuevoIndice + total) % total)

  const manejarInicioSwipe = (evento) => {
    inicioSwipe.current = evento.touches[0].clientX
  }

  const manejarFinSwipe = (evento) => {
    if (inicioSwipe.current === null) return
    const delta = evento.changedTouches[0].clientX - inicioSwipe.current
    if (delta > 45) irA(indice - 1)
    else if (delta < -45) irA(indice + 1)
    inicioSwipe.current = null
  }

  return (
    <div className="menu-carrusel">
      <div className="menu-carrusel__viewport" onTouchStart={manejarInicioSwipe} onTouchEnd={manejarFinSwipe}>
        <div className="menu-carrusel__pista" style={{ transform: `translateX(-${indice * 100}%)` }}>
          {productos.map((item) => {
            // Prioridad: foto propia del producto > foto real
            // representativa de la categoría > degradado de marca con
            // ícono (solo cuando no existe ninguna foto real).
            const foto = item.imagen || fotosPorCategoria?.[item.categoria]
            const gradiente = coloresPorCategoria?.[item.categoria]
            return (
              <div
                className="menu-carrusel__slide"
                key={item.id}
                style={!foto && gradiente ? { background: `linear-gradient(135deg, ${gradiente[0]}, ${gradiente[1]})` } : undefined}
              >
                {foto ? (
                  <img src={foto} alt={item.nombre} loading="lazy" />
                ) : (
                  <i className="ri-restaurant-2-line" aria-hidden="true" />
                )}
                {item.destacado && <span className="menu-carrusel__badge">Destacado</span>}
              </div>
            )
          })}
        </div>

        {total > 1 && (
          <>
            <button type="button" className="menu-carrusel__flecha menu-carrusel__flecha--izq" onClick={() => irA(indice - 1)} aria-label="Producto anterior">
              <i className="ri-arrow-left-s-line" aria-hidden="true" />
            </button>
            <button type="button" className="menu-carrusel__flecha menu-carrusel__flecha--der" onClick={() => irA(indice + 1)} aria-label="Producto siguiente">
              <i className="ri-arrow-right-s-line" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="menu-carrusel__puntos">
          {productos.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={i === indice ? 'menu-carrusel__punto menu-carrusel__punto--activo' : 'menu-carrusel__punto'}
              onClick={() => irA(i)}
              aria-label={`Ver ${item.nombre}`}
            />
          ))}
        </div>
      )}

      {/* key={producto.id} fuerza remount al cambiar de producto, así
          la animación de entrada (CSS) se reproduce cada vez. */}
      <div className="menu-carrusel__specs" key={producto.id}>
        <h3>{producto.nombre}</h3>
        {producto.descripcion && <p className="menu-carrusel__descripcion">{producto.descripcion}</p>}

        {producto.variantes ? (
          <ul className="menu-carrusel__variantes">
            {producto.variantes.map((variante) => (
              <li key={variante.etiqueta}>
                <span>{variante.etiqueta}</span>
                <strong>{formatoPrecioCOP.format(variante.precio)}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className="menu-carrusel__precio">{formatoPrecioCOP.format(producto.precio)}</p>
        )}

        <WhatsAppOrderButton numero={whatsapp} mensaje={mensaje} className="menu-carrusel__boton">
          Pedir por WhatsApp
        </WhatsAppOrderButton>

        <p className="menu-carrusel__contador">
          {indice + 1} / {total}
        </p>
      </div>
    </div>
  )
}

export default ProductCarousel
