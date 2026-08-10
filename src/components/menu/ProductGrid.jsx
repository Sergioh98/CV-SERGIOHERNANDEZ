import ProductCard from './ProductCard'

function ProductGrid({ productos, whatsapp, nombreRestaurante, coloresPorCategoria }) {
  if (productos.length === 0) {
    return <p className="menu-grid__vacio">Aún no hay productos en esta categoría.</p>
  }

  return (
    <div className="menu-grid">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          whatsapp={whatsapp}
          nombreRestaurante={nombreRestaurante}
          colorGradiente={coloresPorCategoria?.[producto.categoria]}
        />
      ))}
    </div>
  )
}

export default ProductGrid
