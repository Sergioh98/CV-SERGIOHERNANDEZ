// Helpers compartidos por los 3 menús (Tiffy, Minona, Dalila). Vive
// separado de cada archivo de datos para no repetir la misma lógica de
// precio/WhatsApp en cada restaurante.

export const formatoPrecioCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})

// precioDesde: si el producto tiene variantes (tamaños), se muestra el
// precio del más económico precedido de "Desde"; si no, el precio único.
export function precioDesde(producto) {
  if (producto.variantes && producto.variantes.length > 0) {
    return Math.min(...producto.variantes.map((v) => v.precio))
  }
  return producto.precio
}

export function whatsappUrl(numero, mensaje) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}
