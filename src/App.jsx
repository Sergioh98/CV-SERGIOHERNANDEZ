import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Loader from './components/Loader'
import FondoAmbiente from './components/FondoAmbiente'
import Navbar from './components/Navbar'
import PaginaDesarrollador from './pages/PaginaDesarrollador'
import PaginaTienda from './pages/PaginaTienda'
import PaginaOsint from './pages/PaginaOsint'
import PaginaMenus from './pages/menus/PaginaMenus'
import PaginaTiffy from './pages/menus/PaginaTiffy'

// Rutas de restaurante: son paginas "cliente" que deben sentirse como
// el sitio propio del negocio, no como una seccion mas del portafolio,
// asi que ocultan el navbar de "Sergio Dev" (a diferencia de /menus,
// que si es parte de la navegacion normal del portafolio).
const RUTAS_SIN_NAVBAR = ['/tiffy', '/minona', '/dalila']

// Shell vive DENTRO de HashRouter porque useLocation necesita el
// contexto del router para saber en que ruta estamos.
function Shell() {
  const { pathname } = useLocation()
  const mostrarNavbar = !RUTAS_SIN_NAVBAR.includes(pathname)

  return (
    <>
      <Loader />
      <FondoAmbiente />
      {mostrarNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<PaginaDesarrollador />} />
        <Route path="/tienda" element={<PaginaTienda />} />
        <Route path="/osint" element={<PaginaOsint />} />
        <Route path="/menus" element={<PaginaMenus />} />
        <Route path="/tiffy" element={<PaginaTiffy />} />
      </Routes>
    </>
  )
}

// App ahora es el shell de rutas. Se usa HashRouter (URLs con
// #/tienda) en vez de BrowserRouter porque GitHub Pages sirve el
// sitio como estatico — sin esto, entrar directo a /tienda o recargar
// esa pagina daria 404.
function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  )
}

export default App
