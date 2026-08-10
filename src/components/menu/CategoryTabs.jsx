// CategoryTabs filtra el grid de productos por categoría. Es estado
// local de la página (no rutas anidadas) a propósito: son ~90
// productos por restaurante y cambiar de categoría debe sentirse
// instantáneo, sin recargar ni perder el scroll del header.
function CategoryTabs({ categorias, activa, onCambiar }) {
  return (
    <nav className="menu-tabs" aria-label="Categorías del menú">
      {categorias.map((categoria) => (
        <button
          key={categoria.id}
          type="button"
          className={activa === categoria.id ? 'menu-tabs__item menu-tabs__item--activa' : 'menu-tabs__item'}
          onClick={() => onCambiar(categoria.id)}
        >
          {categoria.icono && <i className={categoria.icono} aria-hidden="true" />}
          {categoria.nombre}
        </button>
      ))}
    </nav>
  )
}

export default CategoryTabs
