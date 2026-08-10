import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// PaginaMenus es la vitrina del "sistema de menús digitales": una
// tarjeta por restaurante. Sirve para navegar el portafolio y también
// como el link único que se le muestra a un prospecto nuevo ("así
// podría verse tu menú digital").
const restaurantesPortafolio = [
  {
    id: 'tiffy',
    nombre: 'Tifi',
    categoria: 'Repostería · Café · Panadería',
    resumen: 'Tortas artesanales, cheesecakes y postres horneados en casa cada día.',
    ruta: '/tiffy',
    icono: 'ri-cake-3-line',
    disponible: true,
  },
  {
    id: 'minona',
    nombre: 'Mi Nona Café',
    categoria: 'Almuerzos empresariales · Café',
    resumen: 'Menú empresarial, brunch, pizzas y una extensa carta de café en el centro histórico.',
    ruta: '/minona',
    icono: 'ri-restaurant-2-line',
    disponible: true,
  },
  {
    id: 'dalila',
    nombre: 'Dalila Café Bar',
    categoria: 'Café · Desayunos · Restaurante-Bar',
    resumen: 'Desayunos, brunch, carta de restaurante y bar completa.',
    ruta: '/dalila',
    icono: 'ri-goblet-line',
    disponible: true,
  },
]

function PaginaMenus() {
  useEffect(() => {
    document.title = 'Menús Digitales — Sergio Hernández'
  }, [])

  return (
    <div className="page-wrap">
      <main className="pagina-servicio">
        <header className="pagina-servicio__hero">
          <i className="ri-restaurant-2-line" aria-hidden="true" />
          <h1>Menús digitales para restaurantes</h1>
          <p>
            Landing page + menú digital + catálogo + WhatsApp, en un solo lugar. Estos son los
            primeros restaurantes con los que estamos trabajando.
          </p>
        </header>

        <div className="menus-portafolio-grid">
          {restaurantesPortafolio.map((restaurante) =>
            restaurante.disponible ? (
              <Link className="menu-portafolio-card" to={restaurante.ruta} key={restaurante.id}>
                <i className={restaurante.icono} aria-hidden="true" />
                <h3>{restaurante.nombre}</h3>
                <p className="menu-portafolio-card__categoria">{restaurante.categoria}</p>
                <p className="menu-portafolio-card__resumen">{restaurante.resumen}</p>
                <span className="menu-portafolio-card__cta">
                  Ver menú <i className="ri-arrow-right-up-line" aria-hidden="true" />
                </span>
              </Link>
            ) : (
              <div className="menu-portafolio-card menu-portafolio-card--proximamente" key={restaurante.id}>
                <i className={restaurante.icono} aria-hidden="true" />
                <h3>{restaurante.nombre}</h3>
                <p className="menu-portafolio-card__categoria">{restaurante.categoria}</p>
                <p className="menu-portafolio-card__resumen">{restaurante.resumen}</p>
                <span className="menu-portafolio-card__cta menu-portafolio-card__cta--proximamente">
                  Próximamente
                </span>
              </div>
            ),
          )}
        </div>
      </main>
    </div>
  )
}

export default PaginaMenus
