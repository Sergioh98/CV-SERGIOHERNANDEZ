// Datos reales de Tifi (repostería, café y panadería en Valledupar),
// tomados de somostifi.com. Es la única fuente de verdad del menú de
// este restaurante — igual que perfil.js/proyectos.js para el CV.
//
// Pendientes reales (no estaban publicados en el sitio al momento de
// construir esto — TODO explícitos, no hay que inventarlos):
export const restaurante = {
  id: 'tiffy',
  nombre: 'Tifi',
  nombreCompleto: 'Tifi Repostería',
  frase: 'Hacemos la vida más especial',
  categoriaPrincipal: 'Repostería, café y panadería',
  ciudad: 'Valledupar, Colombia',
  // TODO: reemplazar por la dirección exacta del local (no publicada en el sitio).
  direccion: 'Valledupar, Cesar, Colombia',
  whatsapp: '573126714828',
  telefonoVisible: '+57 312 671 4828',
  horario: '8:00 a.m. — 10:00 p.m.',
  mapaUrl: 'https://maps.google.com/?q=Tifi+Reposteria+Valledupar',
  sitioOriginal: 'https://somostifi.com/',
  // TODO: confirmar y reemplazar por las cuentas reales de Instagram/Facebook.
  redes: {
    instagram: 'https://instagram.com/somostifi',
    facebook: 'https://facebook.com/somostifi',
  },
  logo: 'images/tiffy/logo.png',
}

export const categorias = [
  { id: 'tortas', nombre: 'Tortas', icono: 'ri-cake-3-line' },
  { id: 'postres', nombre: 'Postres', icono: 'ri-cake-2-line' },
  { id: 'cafe', nombre: 'Café', icono: 'ri-cup-line' },
  { id: 'bebidas-frias', nombre: 'Bebidas Frías', icono: 'ri-goblet-line' },
  { id: 'helados', nombre: 'Helados', icono: 'ri-cake-2-line' },
  { id: 'pizzetas', nombre: 'Pizzetas', icono: 'ri-pizza-line' },
  { id: 'sandwich', nombre: 'Sándwiches', icono: 'ri-sandwich-line' },
  { id: 'panaderia', nombre: 'Panadería', icono: 'ri-bread-line' },
  { id: 'galletas', nombre: 'Galletas', icono: 'ri-cake-3-line' },
  { id: 'bebidas', nombre: 'Bebidas', icono: 'ri-drop-line' },
]

// coloresPorCategoria: degradado cálido usado como fondo de la card
// cuando el producto no tiene foto propia (café, panadería, etc.) —
// en vez de un ícono chiquito en caja plana, es un bloque grande con
// degradado, más cerca del look "producto destacado" que un ícono
// suelto.
export const coloresPorCategoria = {
  tortas: ['#E4A868', '#6B4226'],
  postres: ['#F0C9A0', '#8B5A2B'],
  cafe: ['#6B4226', '#2B1B10'],
  'bebidas-frias': ['#E58A3B', '#A8460D'],
  helados: ['#F0C9A0', '#8B5A2B'],
  pizzetas: ['#C6862B', '#4A2E1C'],
  sandwich: ['#D9B589', '#6B4226'],
  panaderia: ['#E4C590', '#8B5A2B'],
  galletas: ['#C98A2C', '#4A2E1C'],
  bebidas: ['#E58A3B', '#6B4226'],
}

const CDN = 'https://somostifi.com/wp-content/uploads'
const IMG = 'images/tiffy'

// fotosPorCategoria: foto real representativa para productos SIN foto
// propia dentro de esa categoría (ej. una "porción" que no tiene su
// propio render). No es una foto exacta de cada producto — es la
// mejor foto real disponible de esa categoría, mejor que dejar solo
// el degradado. Categorías sin ninguna foto real disponible en
// somostifi.com (helados, pizzetas, sándwich, panadería, galletas,
// bebidas) se quedan con el degradado — no hay foto real que usar ahí.
export const fotosPorCategoria = {
  postres: `${CDN}/2025/10/chaja.png`,
  cafe: `${IMG}/taza-cafe-tifi.png`,
}

export const productos = [
  // TORTAS — cada sabor en 3 tamaños (Mini, Media Libra, Libra)
  { id: 'torta-tifi-cake', nombre: 'Tifi Cake', categoria: 'tortas', imagen: `${CDN}/2025/10/Tifi-Cake.png`, descripcion: 'La torta insignia de la casa. Bizcocho suave con el relleno clásico de Tifi.', destacado: true, variantes: [{ etiqueta: 'Mini', precio: 19900 }, { etiqueta: 'Media Libra', precio: 36000 }, { etiqueta: 'Libra', precio: 59000 }] },
  { id: 'torta-amapola', nombre: 'Vainilla Cubierta con Amapola', categoria: 'tortas', imagen: `${CDN}/2025/11/amapola-21.png`, descripcion: 'Bizcocho de vainilla con un cubrimiento delicado de semillas de amapola.', variantes: [{ etiqueta: 'Mini', precio: 22000 }, { etiqueta: 'Media Libra', precio: 45000 }, { etiqueta: 'Libra', precio: 69000 }] },
  { id: 'torta-merengue', nombre: 'Vainilla Cubierta de Merengue', categoria: 'tortas', imagen: `${CDN}/2025/10/Merengue.png`, descripcion: 'Bizcocho de vainilla cubierto con merengue suave, horneado en casa.', variantes: [{ etiqueta: 'Mini', precio: 19000 }, { etiqueta: 'Media Libra', precio: 34000 }, { etiqueta: 'Libra', precio: 54000 }] },
  { id: 'torta-arequipe', nombre: 'Vainilla Cubierta de Arequipe', categoria: 'tortas', imagen: `${CDN}/2025/10/Arequipe.png`, descripcion: 'Bizcocho de vainilla bañado en arequipe artesanal.', destacado: true, variantes: [{ etiqueta: 'Mini', precio: 20000 }, { etiqueta: 'Media Libra', precio: 37000 }, { etiqueta: 'Libra', precio: 60000 }] },
  { id: 'torta-ciruela', nombre: 'Vainilla Cubierta de Ciruela', categoria: 'tortas', imagen: `${CDN}/2025/10/Ciruela.png`, descripcion: 'Bizcocho de vainilla con un relleno frutal de ciruela.', variantes: [{ etiqueta: 'Mini', precio: 26000 }, { etiqueta: 'Media Libra', precio: 53000 }, { etiqueta: 'Libra', precio: 73000 }] },
  { id: 'torta-frosting', nombre: 'Vainilla Cubierta con Frosting', categoria: 'tortas', imagen: `${CDN}/2025/10/Merengue.png`, descripcion: 'Bizcocho de vainilla cubierto con frosting cremoso.', variantes: [{ etiqueta: 'Mini', precio: 22000 }, { etiqueta: 'Media Libra', precio: 45000 }, { etiqueta: 'Libra', precio: 69000 }] },
  { id: 'torta-dulce-de-leche', nombre: 'Vainilla Cubierta Dulce de Leche', categoria: 'tortas', imagen: `${CDN}/2025/10/Dulce-de-Leche.png`, descripcion: 'Bizcocho de vainilla cubierto con dulce de leche.', variantes: [{ etiqueta: 'Mini', precio: 22000 }, { etiqueta: 'Media Libra', precio: 46000 }, { etiqueta: 'Libra', precio: 70000 }] },
  { id: 'torta-naranja-arequipe', nombre: 'Naranja Cubierta de Arequipe', categoria: 'tortas', imagen: `${CDN}/2025/10/Arequipe.png`, descripcion: 'Bizcocho de naranja bañado en arequipe artesanal.', variantes: [{ etiqueta: 'Mini', precio: 20000 }, { etiqueta: 'Media Libra', precio: 37000 }, { etiqueta: 'Libra', precio: 60000 }] },
  { id: 'torta-naranja-merengue', nombre: 'Naranja Cubierta de Merengue', categoria: 'tortas', imagen: `${CDN}/2025/10/Merengue.png`, descripcion: 'Bizcocho de naranja cubierto con merengue suave.', variantes: [{ etiqueta: 'Mini', precio: 19000 }, { etiqueta: 'Media Libra', precio: 34000 }, { etiqueta: 'Libra', precio: 54000 }] },
  { id: 'torta-zanahoria', nombre: 'Zanahoria', categoria: 'tortas', imagen: `${CDN}/2025/10/Zanahoria%E2%80%8B.png`, descripcion: 'Bizcocho clásico de zanahoria con especias y cobertura cremosa.', destacado: true, variantes: [{ etiqueta: 'Mini', precio: 26000 }, { etiqueta: 'Media Libra', precio: 50000 }, { etiqueta: 'Libra', precio: 72000 }] },
  { id: 'torta-red-velvet', nombre: 'Red Velvet', categoria: 'tortas', imagen: `${CDN}/2025/10/Red.png`, descripcion: 'El clásico Red Velvet con cobertura cremosa de queso.', destacado: true, variantes: [{ etiqueta: 'Mini', precio: 26000 }, { etiqueta: 'Media Libra', precio: 56000 }, { etiqueta: 'Libra', precio: 78000 }] },
  { id: 'torta-trufa-chocolate', nombre: 'Trufa de Chocolate', categoria: 'tortas', imagen: `${CDN}/2025/11/Chocolate%E2%80%8B.png`, descripcion: 'Bizcocho de chocolate intenso con relleno tipo trufa.', destacado: true, variantes: [{ etiqueta: 'Mini', precio: 22000 }, { etiqueta: 'Media Libra', precio: 44000 }, { etiqueta: 'Libra', precio: 70000 }] },
  { id: 'torta-nucita', nombre: 'Nucita', categoria: 'tortas', imagen: `${CDN}/2025/11/Nucita.png`, descripcion: 'Bizcocho cubierto con crema de avellanas y chocolate.', variantes: [{ etiqueta: 'Mini', precio: 22000 }, { etiqueta: 'Media Libra', precio: 44000 }, { etiqueta: 'Libra', precio: 70000 }] },

  // POSTRES — tortas frías completas + porciones individuales
  { id: 'postre-chaja', nombre: 'Chajá', categoria: 'postres', imagen: `${CDN}/2025/10/chaja.png`, descripcion: 'Torta fría uruguaya de merengue, duraznos y crema chantillí.', destacado: true, precio: 85000 },
  { id: 'postre-genovesa', nombre: 'Genovesa', categoria: 'postres', imagen: `${CDN}/2025/10/genovesa.png`, descripcion: 'Torta fría clásica de capas suaves y crema.', precio: 67000 },
  { id: 'postre-cheesecake-completo', nombre: 'Cheesecake de Fresas y Arándanos', categoria: 'postres', imagen: `${CDN}/2025/10/Frutos-rojos.png`, descripcion: 'Cheesecake cremoso cubierto con fresas y arándanos frescos.', destacado: true, precio: 72000 },
  { id: 'postre-beso-de-angel', nombre: 'Beso de Ángel', categoria: 'postres', imagen: `${CDN}/2025/10/beso-de-an.png`, descripcion: 'Torta fría suave y delicada, una de las favoritas de la casa.', destacado: true, precio: 85000 },
  { id: 'postre-flan-completo', nombre: 'Flan', categoria: 'postres', imagen: `${CDN}/2025/10/Flan-01.png`, descripcion: 'Flan casero de vainilla, suave y cremoso.', precio: 55000 },
  { id: 'postre-flan-porcion', nombre: 'Flan Porción', categoria: 'postres', descripcion: 'Una porción individual de nuestro flan casero.', precio: 8000 },
  { id: 'postre-pay-frutos-rojos', nombre: 'Pay de Frutos Rojos', categoria: 'postres', descripcion: 'Pay artesanal con mermelada de frutos rojos.', precio: 12000 },
  { id: 'postre-porcion-arequipe', nombre: 'Porción de Torta de Arequipe', categoria: 'postres', descripcion: 'Porción individual de nuestra torta de arequipe.', precio: 8000 },
  { id: 'postre-porcion-zanahoria', nombre: 'Porción de Torta de Zanahoria', categoria: 'postres', descripcion: 'Porción individual de nuestra torta de zanahoria.', precio: 8000 },
  { id: 'postre-marquesa-fresa', nombre: 'Porción Marquesa de Fresa', categoria: 'postres', descripcion: 'Capas suaves con fresa natural.', precio: 10000 },
  { id: 'postre-milhojas', nombre: 'Milhojas', categoria: 'postres', descripcion: 'Hojaldre crocante con crema pastelera.', precio: 5000 },
  { id: 'postre-choco-pistachos', nombre: 'Porción Choco Pistachos', categoria: 'postres', descripcion: 'Chocolate y pistacho en una combinación irresistible.', precio: 14500 },
  { id: 'postre-cheesecake-porcion', nombre: 'Porción Cheesecake de Fresas y Arándanos', categoria: 'postres', descripcion: 'Porción individual del cheesecake de la casa.', precio: 10500 },
  { id: 'postre-tiramisu', nombre: 'Cuchareable Tiramisú', categoria: 'postres', descripcion: 'Tiramisú clásico italiano, para comer a cucharadas.', precio: 11000 },
  { id: 'postre-tartaleta-limon', nombre: 'Tartaleta de Limón', categoria: 'postres', descripcion: 'Base crocante con crema de limón fresca.', precio: 7000 },
  { id: 'postre-genovesa-porcion', nombre: 'Genovesa Porción', categoria: 'postres', descripcion: 'Porción individual de nuestra genovesa.', precio: 11000 },
  { id: 'postre-pay-maracuya', nombre: 'Pay de Maracuyá', categoria: 'postres', descripcion: 'Pay artesanal con el toque ácido del maracuyá.', precio: 12000 },
  { id: 'postre-porcion-trufa', nombre: 'Porción de Trufa de Chocolate', categoria: 'postres', descripcion: 'Porción individual de la torta trufa de chocolate.', precio: 9000 },
  { id: 'postre-arroz-de-leche', nombre: 'Arroz de Leche', categoria: 'postres', descripcion: 'Postre casero cremoso de arroz con leche y canela.', precio: 8000 },
  { id: 'postre-porcion-pistachos', nombre: 'Porción Pistachos', categoria: 'postres', descripcion: 'Porción individual de nuestra torta de pistachos.', precio: 13000 },
  { id: 'postre-pay-oreo', nombre: 'Pay de Oreo', categoria: 'postres', descripcion: 'Pay cremoso con base y trozos de galleta Oreo.', precio: 12000 },
  { id: 'postre-chocoflan', nombre: 'ChocoFlan Porción', categoria: 'postres', descripcion: 'Combinación de flan y bizcocho de chocolate en una sola porción.', precio: 12000 },
  { id: 'postre-porcion-chaja', nombre: 'Porción de Torta Chajá', categoria: 'postres', descripcion: 'Porción individual de nuestro Chajá.', precio: 12000 },
  { id: 'postre-muffin-chocolate', nombre: 'Muffin de Chip de Chocolate', categoria: 'postres', descripcion: 'Muffin esponjoso con chips de chocolate.', precio: 5000 },
  { id: 'postre-muffin-arandanos', nombre: 'Muffin de Arándanos', categoria: 'postres', descripcion: 'Muffin esponjoso con arándanos frescos.', precio: 5000 },

  // CAFÉ — bebidas calientes, tamaños 7oz / 9oz
  { id: 'cafe-con-leche', nombre: 'Café con Leche', categoria: 'cafe', imagen: `${IMG}/taza-cafe-tifi.png`, destacado: true, variantes: [{ etiqueta: '7oz', precio: 5000 }, { etiqueta: '9oz', precio: 6000 }] },
  { id: 'cafe-americano', nombre: 'Café Americano', categoria: 'cafe', imagen: `${IMG}/taza-cafe-negra.png`, destacado: true, variantes: [{ etiqueta: '7oz', precio: 5000 }, { etiqueta: '9oz', precio: 5500 }] },
  { id: 'capuccino', nombre: 'Capuccino', categoria: 'cafe', imagen: `${IMG}/taza-cafe-crema.png`, variantes: [{ etiqueta: '7oz', precio: 7000 }, { etiqueta: '9oz', precio: 8000 }] },
  { id: 'capuccino-vainilla', nombre: 'Capuccino de Vainilla', categoria: 'cafe', imagen: `${IMG}/taza-cafe-crema.png`, variantes: [{ etiqueta: '7oz', precio: 8000 }, { etiqueta: '9oz', precio: 9000 }] },
  { id: 'latte', nombre: 'Latte', categoria: 'cafe', imagen: `${IMG}/taza-cafe-cremita.png`, variantes: [{ etiqueta: '7oz', precio: 6500 }, { etiqueta: '9oz', precio: 7500 }] },
  { id: 'mocaccino', nombre: 'Mocaccino', categoria: 'cafe', imagen: `${IMG}/taza-cafe-naranja.png`, variantes: [{ etiqueta: '7oz', precio: 8500 }, { etiqueta: '9oz', precio: 9500 }] },
  { id: 'tinto-sierra', nombre: 'Tinto de la Sierra', categoria: 'cafe', imagen: `${IMG}/taza-cafe-negra.png`, destacado: true, variantes: [{ etiqueta: '7oz', precio: 4000 }, { etiqueta: '9oz', precio: 5000 }] },
  { id: 'aromatica', nombre: 'Aromática', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 4000 }, { etiqueta: '9oz', precio: 5000 }] },
  { id: 'capuccino-baileys', nombre: 'Capuccino Baileys', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 10000 }, { etiqueta: '9oz', precio: 11000 }] },
  { id: 'capuccino-caramelo', nombre: 'Capuccino de Caramelo', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 8000 }, { etiqueta: '9oz', precio: 9000 }] },
  { id: 'chocolate-caliente', nombre: 'Chocolate', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 6500 }, { etiqueta: '9oz', precio: 8000 }] },
  { id: 'milo-caliente', nombre: 'Milo Caliente', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 6500 }, { etiqueta: '9oz', precio: 8000 }] },
  { id: 'te-chai', nombre: 'Té Chai', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 9000 }, { etiqueta: '9oz', precio: 10000 }] },

  // BEBIDAS FRÍAS
  { id: 'capuccino-frio', nombre: 'Capuccino Frío', categoria: 'bebidas-frias', destacado: true, precio: 9000 },
  { id: 'capuccino-frio-caramelo', nombre: 'Capuccino Frío de Caramelo', categoria: 'bebidas-frias', precio: 10000 },
  { id: 'latte-frio', nombre: 'Latte Frío', categoria: 'bebidas-frias', precio: 8500 },
  { id: 'cafe-frio', nombre: 'Café Frío', categoria: 'bebidas-frias', destacado: true, precio: 8000 },
  { id: 'capuccino-frio-baileys', nombre: 'Capuccino Frío de Baileys', categoria: 'bebidas-frias', precio: 12000 },
  { id: 'capuccino-frio-vainilla', nombre: 'Capuccino Frío de Vainilla', categoria: 'bebidas-frias', precio: 10000 },
  { id: 'te-chai-frio', nombre: 'Té Chai Frío', categoria: 'bebidas-frias', precio: 10000 },
  { id: 'milo-frio', nombre: 'Milo Frío', categoria: 'bebidas-frias', precio: 7000 },
  { id: 'nevado', nombre: 'Nevados', categoria: 'bebidas-frias', destacado: true, precio: 15000 },
  { id: 'frappuccino', nombre: 'Frappuccino', categoria: 'bebidas-frias', destacado: true, precio: 9000 },
  { id: 'jugos-naturales', nombre: 'Jugos Naturales', categoria: 'bebidas-frias', descripcion: 'Sabores: Zapote, Fresa, Lulo o Limonada Natural.', precio: 9000 },
  { id: 'limonada-cerezada', nombre: 'Limonada Cerezada', categoria: 'bebidas-frias', precio: 9000 },
  { id: 'limonada-coco', nombre: 'Limonada de Coco', categoria: 'bebidas-frias', destacado: true, precio: 10000 },
  { id: 'malteadas', nombre: 'Malteadas', categoria: 'bebidas-frias', descripcion: 'Sabores: Oreo, Vainilla, Frutos Rojos o Café.', precio: 12000 },

  // HELADOS
  { id: 'tifi-cream', nombre: 'Tifi Cream', categoria: 'helados', descripcion: 'Helado de vainilla con arequipe o chocolate.', destacado: true, precio: 7000 },
  { id: 'cream-toppings', nombre: 'Cream Toppings', categoria: 'helados', descripcion: 'Toppings: Oreo, M&M o chispitas de colores.', precio: 8500 },

  // PIZZETAS
  { id: 'pizzeta-jamon', nombre: 'Pizzeta Jamón', categoria: 'pizzetas', precio: 12000 },
  { id: 'pizzeta-hawaiana', nombre: 'Pizzeta Hawaiana', categoria: 'pizzetas', destacado: true, precio: 13000 },
  { id: 'pizzeta-diosa', nombre: 'Pizzeta Diosa', categoria: 'pizzetas', descripcion: 'Pollo, jamón, chorizo y tocineta.', destacado: true, precio: 15000 },
  { id: 'pizzeta-pepperoni', nombre: 'Pizzeta Pepperoni', categoria: 'pizzetas', precio: 15000 },
  { id: 'pizzeta-la-reina', nombre: 'Pizzeta La Reina', categoria: 'pizzetas', destacado: true, precio: 14000 },

  // SÁNDWICH — pan de masa madre
  { id: 'sandwich-clasico', nombre: 'Sándwich Clásico', categoria: 'sandwich', descripcion: 'Pan de masa madre, jamón y queso mozzarella.', destacado: true, precio: 7000 },
  { id: 'sandwich-jamon-tocineta', nombre: 'Jamón y Tocineta', categoria: 'sandwich', descripcion: 'Pan de masa madre, jamón, tocineta y queso mozzarella.', precio: 9500 },
  { id: 'sandwich-especial', nombre: 'Sándwich Especial', categoria: 'sandwich', descripcion: 'Pollo, jamón, queso mozzarella, verduras frescas y salsa de la casa.', destacado: true, precio: 12000 },
  { id: 'sandwich-super-especial', nombre: 'Sándwich Super Especial', categoria: 'sandwich', descripcion: 'Doble pollo, doble jamón, doble queso, doble tocineta, verduras y salsa de la casa.', destacado: true, precio: 17000 },
  { id: 'sandwich-cubano', nombre: 'Sándwich Cubano', categoria: 'sandwich', descripcion: 'Pan francés, pollo, jamón, queso, cebolla macerada, tomate y pepino encurtido.', precio: 18000 },

  // PANADERÍA
  { id: 'pan-espinaca-queso-cebolla', nombre: 'Pan de Espinaca, Queso y Cebolla', categoria: 'panaderia', precio: 2000 },
  { id: 'pan-frances', nombre: 'Pan Francés', categoria: 'panaderia', precio: 1500 },
  { id: 'pan-tajado-pequeno', nombre: 'Pan Tajado Pequeño', categoria: 'panaderia', precio: 4000 },
  { id: 'mogolla-arequipe-x8', nombre: 'Mogolla con Arequipe (x8)', categoria: 'panaderia', precio: 7000 },
  { id: 'pan-especial', nombre: 'Pan Especial', categoria: 'panaderia', precio: 4000 },
  { id: 'mogolla-bocadillo-und', nombre: 'Mogolla con Bocadillo Unidad', categoria: 'panaderia', precio: 1500 },
  { id: 'pan-tajado-grande', nombre: 'Pan Tajado Grande', categoria: 'panaderia', precio: 7000 },
  { id: 'pan-mantequilla-x8', nombre: 'Pan de Mantequilla (x8)', categoria: 'panaderia', destacado: true, precio: 7500 },
  { id: 'rolliarequipe-und', nombre: 'Rolliarequipe Unidad', categoria: 'panaderia', precio: 2000 },
  { id: 'pinitas-x6', nombre: 'Piñitas (x6)', categoria: 'panaderia', precio: 4000 },
  { id: 'rolliqueso', nombre: 'Rolliqueso', categoria: 'panaderia', precio: 2000 },
  { id: 'pan-de-queso', nombre: 'Pan de Queso', categoria: 'panaderia', destacado: true, precio: 2000 },
  { id: 'mogollita-queso-x8', nombre: 'Mogollita de Queso (x8)', categoria: 'panaderia', precio: 7000 },
  { id: 'pan-mantequilla-und', nombre: 'Pan de Mantequilla Unidad', categoria: 'panaderia', precio: 1500 },
  { id: 'mogolla-arequipe-und', nombre: 'Mogolla con Arequipe Unidad', categoria: 'panaderia', precio: 1500 },
  { id: 'pan-tajado-7-granos', nombre: 'Pan Tajado 7 Granos', categoria: 'panaderia', precio: 8000 },
  { id: 'pan-de-queso-x8', nombre: 'Pan de Queso (x8)', categoria: 'panaderia', precio: 8500 },
  { id: 'pan-ajo-queso-oregano-x6', nombre: 'Pan de Ajo, Queso y Orégano (x6)', categoria: 'panaderia', precio: 6700 },

  // GALLETAS Y HORNEADOS
  { id: 'alfajor-coco', nombre: 'Alfajor de Coco', categoria: 'galletas', precio: 5000 },
  { id: 'galleta-danesa', nombre: 'Galleta Danesa', categoria: 'galletas', precio: 3000 },
  { id: 'galleta-nutella', nombre: 'Galleta Nutella', categoria: 'galletas', destacado: true, precio: 4500 },
  { id: 'galleta-mm', nombre: 'Galleta M&M', categoria: 'galletas', precio: 5500 },
  { id: 'galletas-chocochip', nombre: 'Galletas Chocochip', categoria: 'galletas', destacado: true, precio: 4000 },
  { id: 'brownies', nombre: 'Brownies', categoria: 'galletas', destacado: true, precio: 5500 },
  { id: 'galleta-dulce-de-leche', nombre: 'Galleta Dulce de Leche', categoria: 'galletas', precio: 3500 },
  { id: 'galleta-red-velvet-chip', nombre: 'Galleta Red Velvet con Choco Chip', categoria: 'galletas', precio: 4500 },
  { id: 'pandebono', nombre: 'Pandebono', categoria: 'galletas', destacado: true, precio: 3500 },
  { id: 'dedito-queso-bocadillo', nombre: 'Dedito de Queso con Bocadillo Horneado', categoria: 'galletas', precio: 3500 },
  { id: 'croissant-jamon', nombre: 'Croissant de Jamón', categoria: 'galletas', precio: 5500 },
  { id: 'dedito-queso', nombre: 'Dedito de Queso Horneado', categoria: 'galletas', precio: 3500 },
  { id: 'croissant-chocolate', nombre: 'Croissant de Chocolate', categoria: 'galletas', destacado: true, precio: 8500 },

  // BEBIDAS (gaseosas y aguas)
  { id: 'canada-dry', nombre: 'Canada Dry', categoria: 'bebidas', precio: 6000 },
  { id: 'gaseosa', nombre: 'Gaseosa', categoria: 'bebidas', destacado: true, precio: 5000 },
  { id: 'te-hatsu', nombre: 'Té Hatsu', categoria: 'bebidas', precio: 7000 },
  { id: 'bretana', nombre: 'Bretaña', categoria: 'bebidas', precio: 6000 },
  { id: 'soda-hatsu', nombre: 'Soda Hatsu', categoria: 'bebidas', precio: 7000 },
  { id: 'agua-saborizada-manzana', nombre: 'Agua Saborizada Manzana', categoria: 'bebidas', precio: 5000 },
  { id: 'agua-cristal', nombre: 'Agua Cristal', categoria: 'bebidas', precio: 4000 },
]
