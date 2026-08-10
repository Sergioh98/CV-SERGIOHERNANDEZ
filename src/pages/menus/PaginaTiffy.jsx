import { useEffect, useState } from 'react'
import MenuHero from '../../components/menu/MenuHero'
import CategoryTabs from '../../components/menu/CategoryTabs'
import ProductCarousel from '../../components/menu/ProductCarousel'
import RestaurantFooter from '../../components/menu/RestaurantFooter'
import { restaurante, categorias, productos, coloresPorCategoria } from '../../data/restaurantes/tiffy'

const statsHero = [
  { valor: '10+', etiqueta: 'Sabores de torta' },
  { valor: '10', etiqueta: 'Categorías' },
  { valor: '8am-10pm', etiqueta: 'Horario' },
]

// Fotos que rotan en el hero — todas tortas reales (el producto
// protagonista), no solo una imagen estática.
const imagenesHero = [
  'https://somostifi.com/wp-content/uploads/2025/10/Tifi-Cake.png',
  'https://somostifi.com/wp-content/uploads/2025/10/Red.png',
  'https://somostifi.com/wp-content/uploads/2025/10/Zanahoria%E2%80%8B.png',
  'https://somostifi.com/wp-content/uploads/2025/11/Chocolate%E2%80%8B.png',
  'https://somostifi.com/wp-content/uploads/2025/10/Arequipe.png',
]

// PaginaTiffy: el producto protagonista son las tortas, así que esa es
// la categoría con la que arranca el menú (no la primera del array por
// casualidad, es la categoría "estrella" del negocio).
function PaginaTiffy() {
  const [categoriaActiva, setCategoriaActiva] = useState('tortas')

  useEffect(() => {
    document.title = `${restaurante.nombreCompleto} — Menú Digital`
  }, [])

  const productosFiltrados = productos.filter((producto) => producto.categoria === categoriaActiva)

  return (
    <div className="menu-restaurante menu-restaurante--tiffy">
      <MenuHero
        restaurante={restaurante}
        eyebrow="Repostería · Café · Panadería"
        titulo="Tortas que hacen la vida más especial"
        descripcion="Bizcochos artesanales, cheesecakes y postres horneados en casa cada día. Pide tu torta favorita o arma tu pedido de cumpleaños directo por WhatsApp."
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
        />
      </main>

      <RestaurantFooter restaurante={restaurante} />
    </div>
  )
}

export default PaginaTiffy
