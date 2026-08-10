import { useEffect, useState } from 'react'

// HeroCarousel rota automáticamente entre varias fotos de producto en
// el hero (ej. distintas tortas), con un crossfade suave — pedido
// explícito del cliente en vez de una sola imagen estática.
function HeroCarousel({ imagenes, alt, intervalo = 3200 }) {
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    if (!imagenes || imagenes.length <= 1) return undefined
    const id = setInterval(() => {
      setIndice((valor) => (valor + 1) % imagenes.length)
    }, intervalo)
    return () => clearInterval(id)
  }, [imagenes, intervalo])

  if (!imagenes || imagenes.length === 0) return null

  return (
    <div className="menu-hero__carrusel">
      {imagenes.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={
            i === indice ? 'menu-hero__carrusel-img menu-hero__carrusel-img--activa' : 'menu-hero__carrusel-img'
          }
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  )
}

export default HeroCarousel
