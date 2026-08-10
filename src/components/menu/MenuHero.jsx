import HeroCarousel from './HeroCarousel'
import StatsBar from './StatsBar'
import WhatsAppOrderButton from './WhatsAppOrderButton'

// MenuHero es el bloque más fuerte de cada landing: carrusel de fotos
// de producto a un lado (rota sola, ver HeroCarousel), headline + CTAs
// al otro, y el logo del restaurante visible arriba del eyebrow. La
// estructura es la misma para los 3 restaurantes (heredada de la
// referencia visual), pero el color de marca, las imágenes y el texto
// cambian por completo vía props — el tema visual real lo define la
// clase `.menu-restaurante--<id>` en el contenedor de la página (ver
// index.css).
//
// "Ver menú" hace scroll con JS (no href="#menu"): el sitio usa
// HashRouter para las rutas (#/tiffy, #/minona...), así que un ancla
// de fragmento normal chocaría con el router.
function MenuHero({ restaurante, eyebrow, titulo, descripcion, imagenes, stats, idMenu = 'menu-productos' }) {
  const irAlMenu = () => {
    document.getElementById(idMenu)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="menu-hero">
      <div className="menu-hero__imagen">
        <HeroCarousel imagenes={imagenes} alt={restaurante.nombreCompleto} />
      </div>

      <div className="menu-hero__contenido">
        {restaurante.logo && (
          <img className="menu-hero__logo" src={restaurante.logo} alt={`Logo ${restaurante.nombreCompleto}`} />
        )}
        {eyebrow && <span className="menu-hero__eyebrow">{eyebrow}</span>}
        <h1 className="menu-hero__titulo">{titulo}</h1>
        <p className="menu-hero__descripcion">{descripcion}</p>

        <div className="menu-hero__acciones">
          <button type="button" className="btn-hero btn-hero--outline" onClick={irAlMenu}>
            Ver menú
          </button>
          <WhatsAppOrderButton
            numero={restaurante.whatsapp}
            mensaje={`Hola, quiero hacer un pedido en ${restaurante.nombreCompleto}`}
            className="btn-hero btn-hero--solido"
          >
            Pedir por WhatsApp
          </WhatsAppOrderButton>
        </div>

        <StatsBar stats={stats} />
      </div>
    </header>
  )
}

export default MenuHero
