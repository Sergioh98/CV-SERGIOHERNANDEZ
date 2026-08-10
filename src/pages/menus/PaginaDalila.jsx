import { useEffect, useState } from 'react'
import MenuHero from '../../components/menu/MenuHero'
import CategoryTabs from '../../components/menu/CategoryTabs'
import ProductCarousel from '../../components/menu/ProductCarousel'
import RestaurantFooter from '../../components/menu/RestaurantFooter'
import { restaurante, categorias, productos, coloresPorCategoria, fotosPorCategoria } from '../../data/restaurantes/dalila'

const statsHero = [
  { valor: '20', etiqueta: 'Categorías' },
  { valor: '8am-2am', etiqueta: 'Vie y Sáb' },
  { valor: '100+', etiqueta: 'Platos y bebidas' },
]

// Fotos reales del menú/galería de Dalila (dalilavalledupar.com),
// recortadas sin fondo para el hero — igual que el estilo "producto
// flotante" de la referencia visual.
const imagenesHero = [
  'images/dalila/hero-bife.webp',
  'images/dalila/hero-pizza.webp',
  'images/dalila/hero-sandwich.webp',
  'images/dalila/hero-postres.webp',
  'images/dalila/hero-brunch.webp',
]

// PaginaDalila: a diferencia de Tiffy/Minona, aquí no hay un único
// "producto estrella" confirmado por el sitio real — el hero comunica
// las 3 fortalezas reales (café, desayunos/brunch, restaurante-bar) en
// vez de inventar un foco que no existe en la carta original.
function PaginaDalila() {
  const [categoriaActiva, setCategoriaActiva] = useState('desayunos')

  useEffect(() => {
    document.title = `${restaurante.nombreCompleto} — Menú Digital`
  }, [])

  const productosFiltrados = productos.filter((producto) => producto.categoria === categoriaActiva)

  return (
    <div className="menu-restaurante menu-restaurante--dalila">
      <MenuHero
        restaurante={restaurante}
        eyebrow="Café · Desayunos · Restaurante-Bar"
        titulo="Café, desayunos y una carta que no se detiene"
        descripcion="Desde el primer café de la mañana hasta cócteles y platos fuertes en la noche: desayunos, brunch, pastas, pizzetas y una carta de bar completa en el corazón de Valledupar."
        imagenes={imagenesHero}
        stats={statsHero}
      />

      <main className="menu-contenido" id="menu-productos">
        <CategoryTabs categorias={categorias} activa={categoriaActiva} onCambiar={setCategoriaActiva} />
        <ProductCarousel
          productos={productosFiltrados}
          whatsapp={restaurante.whatsapp}
          nombreRestaurante={restaurante.nombreCompleto}
          coloresPorCategoria={coloresPorCategoria}
          fotosPorCategoria={fotosPorCategoria}
        />
      </main>

      <RestaurantFooter restaurante={restaurante} />
    </div>
  )
}

export default PaginaDalila
