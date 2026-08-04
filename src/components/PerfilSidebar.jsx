import { useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { perfil } from '../data/perfil'
import { proyectosDestacados, otrosProyectos } from '../data/proyectos'
import { experiencia } from '../data/perfil'

// totalProyectos cuenta todos los proyectos reales (destacados + chicos)
// para el contador estilo "posts" — un numero real, no inventado.
const totalProyectos = proyectosDestacados.length + otrosProyectos.length
const aniosActivo = new Date().getFullYear() - 2019

// PerfilSidebar es la tarjeta de la izquierda, rediseñada para que se
// sienta como un perfil de red social: portada, avatar circular,
// nombre con insignia de "verificado", metricas tipo posts/seguidores,
// y botones de accion en vez de una simple lista de contacto.
function PerfilSidebar() {
  const { escrito, terminado } = useTypewriter(perfil.nombre, { velocidad: 90, delayInicial: 900 })

  // videoError guarda si el video de perfil fallo al cargar (por ejemplo
  // si todavia no se copio sergio.mp4 a public/). Si falla, mostramos un
  // avatar con las iniciales en vez de romper la pantalla.
  const [videoError, setVideoError] = useState(false)

  return (
    <aside className="sidebar">
      {/* PORTADA: banda superior estilo "cover photo" de un perfil social */}
      <div className="sidebar__portada" aria-hidden="true" />

      <div className="sidebar__avatar-wrap">
        {!videoError ? (
          <video
            className="sidebar__avatar-video"
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src="/sergio.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="sidebar__avatar-fallback">SH</div>
        )}
        <span className="sidebar__badge" title="Perfil verificado">
          <i className="ri-checkbox-circle-fill" aria-hidden="true" />
        </span>
      </div>

      <h1 className="sidebar__nombre">
        {escrito}
        <span className={terminado ? 'cursor-parpadeo cursor-parpadeo--fin' : 'cursor-parpadeo'} aria-hidden="true" />
      </h1>

      <p className="sidebar__rol">{perfil.rol}</p>

      {/* MÉTRICAS estilo red social: posts / años activo / stack */}
      <div className="sidebar__metricas">
        <div className="sidebar__metrica">
          <strong>{totalProyectos}</strong>
          <span>Proyectos</span>
        </div>
        <div className="sidebar__metrica">
          <strong>{aniosActivo}+</strong>
          <span>Años activo</span>
        </div>
        <div className="sidebar__metrica">
          <strong>{experiencia.length}</strong>
          <span>Roles</span>
        </div>
      </div>

      <p className="sidebar__bio">{perfil.bio}</p>

      {/* ACCIONES estilo red social: un botón primario ("Conectar") y
          botones secundarios, en vez de una lista plana de links. */}
      <div className="sidebar__acciones">
        <a className="btn-social btn-social--primario" href={`mailto:${perfil.email}`}>
          <i className="ri-mail-line" aria-hidden="true" />
          Conectar
        </a>
        <a
          className="btn-social"
          href={perfil.github}
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-github-line" aria-hidden="true" />
          Seguir en GitHub
        </a>
      </div>

      <a className="btn-download" href={perfil.cvPdf} download>
        <i className="ri-file-download-line" aria-hidden="true" />
        Descargar CV en PDF
      </a>
    </aside>
  )
}

export default PerfilSidebar
