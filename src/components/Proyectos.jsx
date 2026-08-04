import TituloSeccion from './TituloSeccion'
import PostProyecto from './PostProyecto'
import { proyectosDestacados, otrosProyectos } from '../data/proyectos'

function Proyectos() {
  return (
    <div className="section-box" id="projects">
      <TituloSeccion icono="ri-code-box-line" texto="Proyectos" />

      <p className="section-intro">
        Cada proyecto de aquí tiene su código real en GitHub — clic en “Ver código” para revisarlo.
      </p>

      <div className="posts-feed">
        {proyectosDestacados.map((proyecto) => (
          <PostProyecto proyecto={proyecto} key={proyecto.id} />
        ))}
      </div>

      <h3 className="otros-proyectos__titulo">Otros proyectos</h3>
      <div className="otros-proyectos">
        {otrosProyectos.map((proyecto) => (
          <a
            className="mini-card"
            href={proyecto.codigo}
            target="_blank"
            rel="noreferrer"
            key={proyecto.id}
          >
            <div className="mini-card__cabeza">
              <i className="ri-code-s-slash-line" aria-hidden="true" />
              <span>{proyecto.nombre}</span>
            </div>
            <p>{proyecto.resumen}</p>
            <div className="mini-card__tags">
              {proyecto.stack.map((tec) => (
                <span className="tag" key={tec}>
                  {tec}
                </span>
              ))}
            </div>
            <span className="mini-card__link">
              Ver código <i className="ri-arrow-right-up-line" aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Proyectos
