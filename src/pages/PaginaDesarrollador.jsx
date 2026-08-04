import PerfilSidebar from '../components/PerfilSidebar'
import SobreMi from '../components/SobreMi'
import Experiencia from '../components/Experiencia'
import Skills from '../components/Skills'
import Proyectos from '../components/Proyectos'
import GithubCta from '../components/GithubCta'

// PaginaDesarrollador es el CV de siempre: perfil, experiencia, stack
// y proyectos. Antes era todo el contenido de App; ahora es una de las
// 3 areas de servicio (junto a Tienda y OSINT).
function PaginaDesarrollador() {
  return (
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
  )
}

export default PaginaDesarrollador
