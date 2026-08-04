import TituloSeccion from './TituloSeccion'
import { experiencia } from '../data/perfil'

function Experiencia() {
  return (
    <div className="section-box" id="experience">
      <TituloSeccion icono="ri-briefcase-line" texto="Experiencia" />

      {experiencia.map((item) => (
        <div className="timeline-item" key={item.titulo}>
          <h3>{item.titulo}</h3>
          <span className="date">{item.fecha}</span>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </div>
  )
}

export default Experiencia
