import { Link } from 'react-router-dom'

// RestaurantFooter cierra cada landing con la info de contacto real
// (dirección, WhatsApp, horario, redes) y un crédito discreto que
// enlaza de vuelta al portafolio — útil tanto para navegación como
// para el objetivo comercial: quien vea el menú puede llegar al resto
// del portafolio con un clic.
function RestaurantFooter({ restaurante }) {
  return (
    <footer className="menu-footer">
      <div className="menu-footer__marca">
        {restaurante.logo && <img src={restaurante.logo} alt={restaurante.nombreCompleto} />}
        <div>
          <strong>{restaurante.nombreCompleto}</strong>
          <p>{restaurante.frase}</p>
        </div>
      </div>

      <div className="menu-footer__info">
        <a href={restaurante.mapaUrl} target="_blank" rel="noreferrer">
          <i className="ri-map-pin-2-line" aria-hidden="true" />
          {restaurante.direccion}
        </a>
        <a href={`https://wa.me/${restaurante.whatsapp}`} target="_blank" rel="noreferrer">
          <i className="ri-whatsapp-line" aria-hidden="true" />
          {restaurante.telefonoVisible}
        </a>
        <span>
          <i className="ri-time-line" aria-hidden="true" />
          {restaurante.horario}
        </span>
      </div>

      {(restaurante.redes?.instagram || restaurante.redes?.facebook) && (
        <div className="menu-footer__redes">
          {restaurante.redes?.instagram && (
            <a href={restaurante.redes.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="ri-instagram-line" aria-hidden="true" />
            </a>
          )}
          {restaurante.redes?.facebook && (
            <a href={restaurante.redes.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="ri-facebook-circle-line" aria-hidden="true" />
            </a>
          )}
        </div>
      )}

      <p className="menu-footer__creditos">
        Menú digital creado por{' '}
        <Link to="/">Sergio Hernández</Link>
      </p>
    </footer>
  )
}

export default RestaurantFooter
