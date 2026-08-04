import { perfil } from '../data/perfil'

// GithubCta cierra la pagina con una franja destacada que invita a
// revisar el perfil real de GitHub. En el sitio original el link de
// navegacion "#github" no llevaba a ningun lado (no existia esa
// seccion) — aqui se corrige ese enlace roto y de paso se le da al
// reclutador un cierre claro: "aqui está todo el código".
function GithubCta() {
  return (
    <div className="section-box github-cta" id="github">
      <i className="ri-github-fill github-cta__icono" aria-hidden="true" />
      <h2>¿Quieres ver más código?</h2>
      <p>Todos mis repositorios, commits e historial de proyectos están en mi perfil de GitHub.</p>
      <a className="btn-social btn-social--primario" href={perfil.github} target="_blank" rel="noreferrer">
        <i className="ri-github-line" aria-hidden="true" />
        github.com/Sergioh98
      </a>
    </div>
  )
}

export default GithubCta
