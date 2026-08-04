import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Las 3 areas de servicio. "fin: true" en Desarrollador hace que su
// NavLink solo se marque activo en "/" exacto (si no, matchearia
// tambien /tienda y /osint por el prefijo compartido).
const enlaces = [
  { to: '/', texto: 'Desarrollador', icono: 'ri-code-s-slash-line', fin: true },
  { to: '/tienda', texto: 'Tienda', icono: 'ri-store-2-line' },
  { to: '/osint', texto: 'OSINT', icono: 'ri-search-eye-line' },
]

function claseEnlace({ isActive }) {
  return isActive ? 'nav-link--activo' : ''
}

// Navbar es la barra fija de arriba. Antes tenia anclas a secciones de
// una sola pagina (#about, #experience...); ahora son rutas reales a
// las 3 areas de servicio (Desarrollador / Tienda / OSINT). En mobile
// se oculta .nav-links por espacio y aparece un boton de hamburguesa
// con un menu desplegable propio con los mismos enlaces.
function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" onClick={() => setAbierto(false)}>
        Sergio Dev
      </NavLink>

      <ul className="nav-links">
        {enlaces.map((enlace) => (
          <li key={enlace.to}>
            <NavLink to={enlace.to} end={enlace.fin} className={claseEnlace}>
              <i className={enlace.icono} aria-hidden="true" />
              {enlace.texto}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        type="button"
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={abierto}
        onClick={() => setAbierto((valor) => !valor)}
      >
        <i className={abierto ? 'ri-close-line' : 'ri-menu-line'} aria-hidden="true" />
      </button>

      {abierto && (
        <ul className="nav-links-movil">
          {enlaces.map((enlace) => (
            <li key={enlace.to}>
              <NavLink to={enlace.to} end={enlace.fin} className={claseEnlace} onClick={() => setAbierto(false)}>
                <i className={enlace.icono} aria-hidden="true" />
                {enlace.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
