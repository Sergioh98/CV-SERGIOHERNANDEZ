// StatsBar pinta la fila de "prueba social" del hero (rating, clientes,
// especialidades...) — genérica: cada restaurante pasa sus propios
// stats como props, nada queda hardcodeado aquí.
function StatsBar({ stats }) {
  if (!stats || stats.length === 0) return null

  return (
    <div className="menu-stats">
      {stats.map((stat) => (
        <div className="menu-stats__item" key={stat.etiqueta}>
          <strong>{stat.valor}</strong>
          <span>{stat.etiqueta}</span>
        </div>
      ))}
    </div>
  )
}

export default StatsBar
