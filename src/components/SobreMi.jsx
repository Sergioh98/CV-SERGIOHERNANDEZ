import TituloSeccion from './TituloSeccion'
import { perfil } from '../data/perfil'

function SobreMi() {
  return (
    <div className="section-box" id="about">
      <TituloSeccion icono="ri-user-smile-line" texto="Sobre Mí" />

      <p>
        {perfil.bio} Mi foco principal hoy es <strong>React</strong>: interfaces con estado real,
        componentes reutilizables y datos en vivo conectados a una base de datos de verdad.
      </p>
    </div>
  )
}

export default SobreMi
