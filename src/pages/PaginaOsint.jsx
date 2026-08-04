import { serviciosOsint, contactoOsint } from '../data/osint'

// PaginaOsint describe los servicios de investigacion en fuentes
// abiertas (geolocalizacion, busqueda por numero/perfil, identificacion
// de estafas y extorsion). Incluye un disclaimer explicito porque es
// el tipo de servicio donde la confianza del cliente depende de dejar
// claro el alcance legal/etico del trabajo.
function PaginaOsint() {
  return (
    <div className="page-wrap">
      <main className="pagina-servicio">
        <header className="pagina-servicio__hero pagina-servicio__hero--osint">
          <i className="ri-search-eye-line" aria-hidden="true" />
          <h1>Investigación OSINT</h1>
          <p>
            Investigación basada en fuentes públicas y abiertas para casos de estafa, extorsión y
            verificación de identidad.
          </p>
          <a
            className="btn-social btn-social--primario"
            href={`https://wa.me/${contactoOsint.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-whatsapp-line" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        </header>

        <section className="section-box">
          <div className="osint-grid">
            {serviciosOsint.map((servicio) => (
              <article className="osint-card" key={servicio.id}>
                <i className={servicio.icono} aria-hidden="true" />
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="pagina-servicio__disclaimer">
          <i className="ri-shield-check-line" aria-hidden="true" />
          Todo el trabajo se realiza únicamente con información disponible públicamente (fuentes
          abiertas / OSINT). No se accede a sistemas privados, cuentas ajenas ni información
          protegida por ley.
        </p>
      </main>
    </div>
  )
}

export default PaginaOsint
