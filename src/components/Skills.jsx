import TituloSeccion from './TituloSeccion'
import { skills } from '../data/perfil'

// Skills pinta el stack como una fila de insignias (no una simple lista
// de iconos como en la version original): cada tecnologia es una
// "chip" con su icono real (devicons) y su nombre. React se pinta
// primero y con la clase --principal, que le da un anillo y brillo
// especial en el CSS — es la tecnologia que se quiere destacar frente
// a un reclutador.
function Skills() {
  return (
    <div className="section-box" id="skills">
      <TituloSeccion icono="ri-code-s-slash-line" texto="Tech Stack" />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            className={skill.principal ? 'skill-chip skill-chip--principal' : 'skill-chip'}
            key={skill.nombre}
          >
            {skill.principal && <span className="skill-chip__estrella">★ Principal</span>}
            <i className={skill.icono} aria-hidden="true" />
            <span>{skill.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
