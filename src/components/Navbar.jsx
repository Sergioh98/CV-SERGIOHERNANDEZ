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

function Navbar() {
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
    </nav>
  )
}

export default Navbar
