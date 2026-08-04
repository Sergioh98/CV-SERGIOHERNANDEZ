import { perfil } from '../data/perfil'

// PostProyecto pinta un proyecto grande como si fuera una publicacion de
// red social: encabezado con avatar+nombre+fecha (como el header de un
// post), la captura o un bloque de codigo decorativo si no hay captura,
// el texto, las tecnologias como hashtags, y una fila de acciones al
// final en vez de like/comentario: "Ver código" y "Ver demo", que es lo
// que de verdad le sirve a un reclutador.
function PostProyecto({ proyecto }) {
  return (
    <article className="post">
      <header className="post__header">
        <div className="post__avatar">{perfil.nombre.charAt(0)}</div>
        <div>
          <p className="post__autor">Sergio Hernandez</p>
          <p className="post__meta">
            <i className="ri-code-box-line" aria-hidden="true" /> Proyecto destacado · {proyecto.fecha}
          </p>
        </div>
      </header>

      {proyecto.imagen ? (
        <div className="post__imagen-wrap">
          <img src={proyecto.imagen} alt={`Captura de ${proyecto.nombre}`} loading="lazy" />
        </div>
      ) : (
        <div className="post__imagen-wrap post__imagen-wrap--codigo" aria-hidden="true">
          <i className="ri-terminal-box-line" />
        </div>
      )}

      <div className="post__cuerpo">
        <h3>{proyecto.nombre}</h3>
        <p className="post__resumen">{proyecto.resumen}</p>
        <p className="post__detalle">{proyecto.detalle}</p>

        <div className="post__tags">
          {proyecto.stack.map((tec) => (
            <span
              className={proyecto.destacarReact && tec === 'React' ? 'tag tag--react' : 'tag'}
              key={tec}
            >
              #{tec}
            </span>
          ))}
        </div>

        <div className="post__acciones">
          {proyecto.codigo ? (
            <a className="btn-social btn-social--primario" href={proyecto.codigo} target="_blank" rel="noreferrer">
              <i className="ri-github-line" aria-hidden="true" />
              Ver código
            </a>
          ) : (
            <span className="post__codigo-nota">
              <i className="ri-lock-line" aria-hidden="true" />
              {proyecto.codigoNota}
            </span>
          )}

          {proyecto.demo && (
            <a className="btn-social" href={proyecto.demo} target="_blank" rel="noreferrer">
              <i className="ri-external-link-line" aria-hidden="true" />
              {proyecto.demoLabel || 'Ver demo'}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default PostProyecto
