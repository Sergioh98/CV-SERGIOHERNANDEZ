import { useState } from 'react'

// Navbar es la barra fija de arriba, con enlaces que saltan a cada
// seccion por su id (#about, #experience, etc.) — anclas normales de
// HTML, sin necesidad de una libreria de rutas para una sola pagina.
const enlaces = [
  { href: '#about', texto: 'Sobre mí' },
  { href: '#experience', texto: 'Experiencia' },
  { href: '#skills', texto: 'Stack' },
  { href: '#projects', texto: 'Proyectos' },
  { href: '#github', texto: 'GitHub' },
]

// En mobile, .nav-links se oculta por espacio (ver CSS), asi que aqui
// agregamos un boton de hamburguesa + un menu desplegable propio para
// que los enlaces sigan disponibles en vez de desaparecer sin mas.
function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-logo">Sergio Dev</div>

      <ul className="nav-links">
        {enlaces.map((enlace) => (
          <li key={enlace.href}>
            <a href={enlace.href}>{enlace.texto}</a>
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
            <li key={enlace.href}>
              <a href={enlace.href} onClick={() => setAbierto(false)}>
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
