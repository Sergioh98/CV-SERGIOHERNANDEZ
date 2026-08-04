import Loader from './components/Loader'
import FondoAmbiente from './components/FondoAmbiente'
import Navbar from './components/Navbar'
import PerfilSidebar from './components/PerfilSidebar'
import SobreMi from './components/SobreMi'
import Experiencia from './components/Experiencia'
import Skills from './components/Skills'
import Proyectos from './components/Proyectos'
import GithubCta from './components/GithubCta'

// App arma la pagina completa. Es un componente "de layout": no guarda
// datos propios (todo vive en src/data/), solo decide el orden en el
// que aparecen las piezas. El layout de dos columnas (sidebar + content)
// vive en el CSS, en .cv-container.
function App() {
  return (
    <>
      <Loader />
      <FondoAmbiente />
      <Navbar />

      <div className="page-wrap">
        <main className="cv-container">
          <PerfilSidebar />

          <section className="content">
            <SobreMi />
            <Experiencia />
            <Skills />
            <Proyectos />
            <GithubCta />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
