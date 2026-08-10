import { HashRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import FondoAmbiente from './components/FondoAmbiente'
import Navbar from './components/Navbar'
import PaginaDesarrollador from './pages/PaginaDesarrollador'
import PaginaTienda from './pages/PaginaTienda'
import PaginaOsint from './pages/PaginaOsint'
import PaginaMenus from './pages/menus/PaginaMenus'
import PaginaTiffy from './pages/menus/PaginaTiffy'

// App ahora es el shell de rutas: Loader/FondoAmbiente/Navbar son
// globales (se ven en las 3 areas), y las paginas cambian debajo segun
// la ruta. Se usa HashRouter (URLs con #/tienda) en vez de BrowserRouter
// porque GitHub Pages sirve el sitio como estatico — sin esto, entrar
// directo a /tienda o recargar esa pagina daria 404.
function App() {
  return (
    <HashRouter>
      <Loader />
      <FondoAmbiente />
      <Navbar />

      <Routes>
        <Route path="/" element={<PaginaDesarrollador />} />
        <Route path="/tienda" element={<PaginaTienda />} />
        <Route path="/osint" element={<PaginaOsint />} />
        <Route path="/menus" element={<PaginaMenus />} />
        <Route path="/tiffy" element={<PaginaTiffy />} />
      </Routes>
    </HashRouter>
  )
}

export default App
