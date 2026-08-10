import { useEffect, useState } from 'react'
import MenuHero from '../../components/menu/MenuHero'
import CategoryTabs from '../../components/menu/CategoryTabs'
import ProductCarousel from '../../components/menu/ProductCarousel'
import RestaurantFooter from '../../components/menu/RestaurantFooter'
import { restaurante, categorias, productos, coloresPorCategoria } from '../../data/restaurantes/minona'

const statsHero = [
  { valor: '$25.900', etiqueta: 'Almuerzo empresarial' },
  { valor: '18', etiqueta: 'Categorías' },
  { valor: '7am-10pm', etiqueta: 'Todos los días' },
]

// Fotos reales del menú de Mi Nona, rotan en el hero.
const imagenesHero = [
  'https://minonacafe.com/wp-content/uploads/2024/11/Pizza-02-Mi-nona-cafe-valledupar.jpg',
  'https://minonacafe.com/wp-content/uploads/2024/11/DSC02613-scaled.jpg',
  'https://minonacafe.com/wp-content/uploads/2024/11/DSC02464-1-scaled.jpg',
  'https://minonacafe.com/wp-content/uploads/2024/11/DSC04348-scaled.jpg',
  'https://minonacafe.com/wp-content/uploads/2024/11/DSC06181-1-scaled.jpg',
]

// PaginaMinona: el producto protagonista es el Almuerzo Empresarial
// (pedido explícito del cliente), así que arranca en esa categoría en
// vez de la primera del array.
function PaginaMinona() {
  const [categoriaActiva, setCategoriaActiva] = useState('empresarial')

  useEffect(() => {
    document.title = `${restaurante.nombreCompleto} — Menú Digital`
  }, [])

  const productosFiltrados = productos.filter((producto) => producto.categoria === categoriaActiva)

  return (
    <div className="menu-restaurante menu-restaurante--minona">
      <MenuHero
        restaurante={restaurante}
        eyebrow="Almuerzos Empresariales · Café · Restaurante"
        titulo="Almuerzo empresarial listo cuando tú lo necesitas"
        descripcion="Entrada, plato fuerte, jugo y postre desde $25.900. Además café de origen, pizzas al horno, hamburguesas y una carta completa en el centro histórico de Valledupar."
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

export default PaginaMinona
