// tienda.js centraliza el catalogo de la tienda: contacto de WhatsApp,
// categorias y productos. Los productos de aqui son EJEMPLOS — edita
// este archivo con el inventario y los precios reales.
export const contactoTienda = {
  whatsapp: '573117294630',
}

export const categoriasProductos = ['Celulares', 'Accesorios']

export const productos = [
  {
    id: 'iphone-13-128',
    nombre: 'iPhone 13 128GB',
    categoria: 'Celulares',
    precio: 1850000,
    descripcion: 'Equipo en excelente estado, batería verificada, incluye cargador.',
    destacado: true,
  },
  {
    id: 'redmi-note-12',
    nombre: 'Redmi Note 12',
    categoria: 'Celulares',
    precio: 780000,
    descripcion: 'Nuevo, sellado de fábrica, garantía incluida.',
  },
  {
    id: 'samsung-a54',
    nombre: 'Samsung Galaxy A54',
    categoria: 'Celulares',
    precio: 1150000,
    descripcion: 'Equipo nuevo, 256GB de almacenamiento, garantía de tienda.',
  },
  {
    id: 'funda-transparente',
    nombre: 'Funda transparente antigolpes',
    categoria: 'Accesorios',
    precio: 25000,
    descripcion: 'Disponible para varios modelos, esquinas reforzadas.',
  },
  {
    id: 'cargador-rapido-20w',
    nombre: 'Cargador rápido 20W + cable USB-C',
    categoria: 'Accesorios',
    precio: 45000,
    descripcion: 'Carga rápida, compatible con iPhone y Android.',
  },
  {
    id: 'audifonos-bluetooth',
    nombre: 'Audífonos Bluetooth inalámbricos',
    categoria: 'Accesorios',
    precio: 65000,
    descripcion: 'Hasta 20 horas de autonomía, con estuche de carga.',
  },
]
