// osint.js centraliza los servicios de investigacion OSINT (Open Source
// Intelligence): busqueda basada exclusivamente en fuentes publicas y
// abiertas, sin acceso a sistemas privados ni informacion protegida.
export const contactoOsint = {
  whatsapp: '573117294630',
}

export const serviciosOsint = [
  {
    id: 'geolocalizacion',
    nombre: 'Geolocalización',
    icono: 'ri-map-pin-2-line',
    descripcion:
      'Ubicación aproximada a partir de datos públicos disponibles, útil para casos de riesgo o seguimiento de una estafa.',
  },
  {
    id: 'busqueda-numero',
    nombre: 'Búsqueda por número telefónico',
    icono: 'ri-phone-line',
    descripcion:
      'Rastreo de un número en fuentes abiertas para identificar registros, perfiles o reportes asociados.',
  },
  {
    id: 'busqueda-perfil',
    nombre: 'Búsqueda por perfil / redes sociales',
    icono: 'ri-user-search-line',
    descripcion:
      'Identificación de presencia digital pública a partir de un perfil, foto o nombre de usuario.',
  },
  {
    id: 'identificacion-estafas',
    nombre: 'Identificación de estafas',
    icono: 'ri-alarm-warning-line',
    descripcion:
      'Verificación de anuncios, perfiles o cuentas sospechosas de fraude con base en fuentes públicas.',
  },
  {
    id: 'identificacion-extorsion',
    nombre: 'Identificación de extorsión',
    icono: 'ri-shield-cross-line',
    descripcion:
      'Apoyo a víctimas para reunir evidencia pública y rastrear el origen de un intento de extorsión.',
  },
  {
    id: 'ubicacion-estafadores',
    nombre: 'Ubicación de estafadores',
    icono: 'ri-search-eye-line',
    descripcion:
      'Investigación combinada (número, perfil, geolocalización) para dar con el rastro digital de un estafador reportado.',
  },
]
