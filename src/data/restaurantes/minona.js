// Datos reales de Mi Nona Café (Valledupar), tomados de minonacafe.com.
// Es la única fuente de verdad del menú de este restaurante.
export const restaurante = {
  id: 'minona',
  nombre: 'Mi Nona',
  nombreCompleto: 'Mi Nona Café',
  frase: 'Un lugar fascinante en el centro histórico de Valledupar',
  categoriaPrincipal: 'Almuerzos empresariales · Café · Restaurante',
  ciudad: 'Valledupar, Colombia',
  direccion: 'Cl. 16 #7-19, Valledupar, Cesar',
  whatsapp: '573003381131',
  telefonoVisible: '+57 300 338 1131',
  horario: 'Lunes a domingo: 7:00 a.m. — 10:00 p.m.',
  mapaUrl: 'https://maps.google.com/?q=Mi+Nona+Cafe+Cl.+16+%237-19+Valledupar',
  sitioOriginal: 'https://minonacafe.com/',
  // TODO: confirmar y reemplazar por las cuentas reales de Instagram/Facebook/Twitter
  // (el sitio los menciona pero no fue posible extraer las URLs exactas).
  redes: {
    instagram: 'https://instagram.com/minonacafe',
    facebook: 'https://facebook.com/minonacafe',
  },
  logo: 'https://minonacafe.com/wp-content/uploads/2024/11/logo-1.png',
}

export const categorias = [
  { id: 'empresarial', nombre: 'Almuerzo Empresarial', icono: 'ri-briefcase-4-line' },
  { id: 'brunch', nombre: 'Brunch', icono: 'ri-sun-line' },
  { id: 'desayunos', nombre: 'Desayunos', icono: 'ri-bowl-line' },
  { id: 'pizzas-personales', nombre: 'Pizzas Personales', icono: 'ri-pizza-line' },
  { id: 'pizzas-pequenas', nombre: 'Pizzas Pequeñas', icono: 'ri-pizza-line' },
  { id: 'pizzas-grandes', nombre: 'Pizzas Grandes', icono: 'ri-pizza-line' },
  { id: 'hamburguesas', nombre: 'Hamburguesas', icono: 'ri-copper-coin-line' },
  { id: 'perros', nombre: 'Perros Calientes', icono: 'ri-copper-coin-line' },
  { id: 'pastas', nombre: 'Pastas', icono: 'ri-restaurant-line' },
  { id: 'lasagna', nombre: 'Lasaña', icono: 'ri-restaurant-line' },
  { id: 'entradas', nombre: 'Entradas', icono: 'ri-restaurant-2-line' },
  { id: 'sandwich', nombre: 'Sándwiches', icono: 'ri-sandwich-line' },
  { id: 'cafe', nombre: 'Café', icono: 'ri-cup-line' },
  { id: 'cafe-frio', nombre: 'Bebidas Frías', icono: 'ri-goblet-line' },
  { id: 'granizados', nombre: 'Granizados', icono: 'ri-goblet-line' },
  { id: 'jugos', nombre: 'Jugos', icono: 'ri-drop-line' },
  { id: 'bebidas', nombre: 'Bebidas', icono: 'ri-cup-line' },
  { id: 'nuevos', nombre: 'Nuevos Productos', icono: 'ri-sparkling-2-line' },
]

export const coloresPorCategoria = {
  empresarial: ['#E0503A', '#7A1F14'],
  brunch: ['#E8A23D', '#7A3E10'],
  desayunos: ['#E8A23D', '#7A3E10'],
  'pizzas-personales': ['#D9432F', '#5C160E'],
  'pizzas-pequenas': ['#D9432F', '#5C160E'],
  'pizzas-grandes': ['#D9432F', '#5C160E'],
  hamburguesas: ['#B23A22', '#4A1509'],
  perros: ['#B23A22', '#4A1509'],
  pastas: ['#C97A2E', '#5C2E10'],
  lasagna: ['#C97A2E', '#5C2E10'],
  entradas: ['#CE5A2E', '#5C2410'],
  sandwich: ['#D08A4E', '#5C3410'],
  cafe: ['#6B4226', '#2B1B10'],
  'cafe-frio': ['#B23A22', '#4A1509'],
  granizados: ['#B23A22', '#4A1509'],
  jugos: ['#E0503A', '#7A1F14'],
  bebidas: ['#7A1F14', '#3A0D08'],
  nuevos: ['#E0503A', '#7A1F14'],
}

const FOTOS = 'https://minonacafe.com/wp-content/uploads/2024/11'

// fotosPorCategoria: foto real representativa (tomada del propio sitio
// de Mi Nona) para productos sin foto propia — mejor que dejar solo
// el degradado en categorías tan grandes como esta.
export const fotosPorCategoria = {
  empresarial: `${FOTOS}/DSC02464-1-scaled.jpg`,
  desayunos: `${FOTOS}/DSC06242s-1-scaled.jpg`,
  brunch: `${FOTOS}/DSC_6949-02-scaled.jpg`,
  cafe: `${FOTOS}/DSC04434-scaled.jpg`,
  'cafe-frio': `${FOTOS}/DSC04434-scaled.jpg`,
  'pizzas-personales': `${FOTOS}/DSC06181-1-scaled.jpg`,
  'pizzas-pequenas': `${FOTOS}/DSC06181-1-scaled.jpg`,
  'pizzas-grandes': `${FOTOS}/DSC06181-1-scaled.jpg`,
  entradas: `${FOTOS}/DSC01733s-scaled.jpg`,
  pastas: `${FOTOS}/DSC04348-scaled.jpg`,
  lasagna: `${FOTOS}/DSC04348-scaled.jpg`,
}

export const productos = [
  // ALMUERZO EMPRESARIAL — el producto protagonista de este restaurante
  { id: 'almuerzo-empresarial', nombre: 'Almuerzo Empresarial', categoria: 'empresarial', descripcion: 'Entrada, plato fuerte, jugo de fruta y postre.', destacado: true, precio: 25900 },

  // NUEVOS PRODUCTOS
  { id: 'pan-de-bono', nombre: 'Pan de Bono', categoria: 'nuevos', precio: 3500 },
  { id: 'dedito-horneado-queso', nombre: 'Dedito Horneado de Queso', categoria: 'nuevos', precio: 3500 },
  { id: 'porcion-torta-arequipe', nombre: 'Porción de Torta de Arequipe', categoria: 'nuevos', precio: 8000 },
  { id: 'porcion-torta-banano', nombre: 'Porción Torta de Banano', categoria: 'nuevos', precio: 8500 },
  { id: 'soda-maracuya', nombre: 'Soda Saborizada de Maracuyá', categoria: 'nuevos', precio: 18000 },
  { id: 'soda-frutos-rojos', nombre: 'Soda Saborizada de Frutos Rojos', categoria: 'nuevos', precio: 18000 },
  { id: 'omelette-mi-nona-nuevo', nombre: 'Omelette Mi Nona', categoria: 'nuevos', descripcion: 'Huevos rellenos de queso, tocineta, salchicha y jamón.', destacado: true, precio: 27000 },
  { id: 'ensalada-cesar-nueva', nombre: 'Ensalada César', categoria: 'nuevos', descripcion: 'Vegetales frescos con salsa original y pollo parrillado.', imagen: 'https://minonacafe.com/wp-content/uploads/2025/04/01-ensalada_Mesa-de-trabajo-1-scaled.jpg', destacado: true, precio: 28000 },
  { id: 'ensalada-verona-nueva', nombre: 'Ensalada Verona', categoria: 'nuevos', descripcion: 'Lechuga, tomates, tocineta, vinagre balsámico y quesos.', imagen: 'https://minonacafe.com/wp-content/uploads/2025/04/01-ensalada-03-scaled.jpg', precio: 29000 },

  // CAFÉ — 7oz / 9oz
  { id: 'tinto-sierra', nombre: 'Tinto de la Sierra', categoria: 'cafe', destacado: true, variantes: [{ etiqueta: '7oz', precio: 6000 }, { etiqueta: '9oz', precio: 7000 }] },
  { id: 'aromatica', nombre: 'Aromática', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 6000 }, { etiqueta: '9oz', precio: 7000 }] },
  { id: 'cafe-americano', nombre: 'Café Americano', categoria: 'cafe', destacado: true, variantes: [{ etiqueta: '7oz', precio: 9500 }, { etiqueta: '9oz', precio: 10500 }] },
  { id: 'latte', nombre: 'Latte', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 9500 }, { etiqueta: '9oz', precio: 10500 }] },
  { id: 'cafe-con-leche', nombre: 'Café con Leche', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 8500 }, { etiqueta: '9oz', precio: 9500 }] },
  { id: 'chocolate', nombre: 'Chocolate', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 7000 }, { etiqueta: '9oz', precio: 9000 }] },
  { id: 'capuccino', nombre: 'Capuccino', categoria: 'cafe', destacado: true, variantes: [{ etiqueta: '7oz', precio: 10900 }, { etiqueta: '9oz', precio: 11900 }] },
  { id: 'te-chai', nombre: 'Té Chai', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 11500 }, { etiqueta: '9oz', precio: 12000 }] },
  { id: 'capuccino-vainilla', nombre: 'Capuccino de Vainilla', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 11500 }, { etiqueta: '9oz', precio: 12500 }] },
  { id: 'capuccino-caramelo', nombre: 'Capuccino de Caramelo', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 11500 }, { etiqueta: '9oz', precio: 12500 }] },
  { id: 'capuccino-baileys', nombre: 'Capuccino de Baileys', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 13000 }, { etiqueta: '9oz', precio: 13500 }] },
  { id: 'mocaccino', nombre: 'Mocaccino', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 10500 }, { etiqueta: '9oz', precio: 11500 }] },
  { id: 'milo-caliente', nombre: 'Milo Caliente', categoria: 'cafe', variantes: [{ etiqueta: '7oz', precio: 7000 }, { etiqueta: '9oz', precio: 9000 }] },
  { id: 'cafe-expresso', nombre: 'Café Expresso', categoria: 'cafe', precio: 6000 },
  { id: 'vienes', nombre: 'Vienés', categoria: 'cafe', precio: 9000 },
  { id: 'cortado', nombre: 'Cortado', categoria: 'cafe', precio: 7500 },
  { id: 'macchiato', nombre: 'Macchiato', categoria: 'cafe', precio: 10000 },
  { id: 'cafe-organico-250', nombre: 'Café Santa Tirsa 250 gr', categoria: 'cafe', descripcion: 'Café orgánico en grano/molido, presentación de 250 gramos.', precio: 32000 },
  { id: 'cafe-organico-500', nombre: 'Café Santa Tirsa 500 gr', categoria: 'cafe', descripcion: 'Café orgánico en grano/molido, presentación de 500 gramos.', precio: 55000 },

  // BEBIDAS FRÍAS DE CAFÉ
  { id: 'cafe-frio', nombre: 'Café Frío', categoria: 'cafe-frio', destacado: true, precio: 10000 },
  { id: 'latte-frio', nombre: 'Latte Frío', categoria: 'cafe-frio', precio: 10000 },
  { id: 'capuccino-frio', nombre: 'Capuccino Frío', categoria: 'cafe-frio', precio: 11500 },
  { id: 'capuccino-frio-vainilla', nombre: 'Capuccino Frío de Vainilla', categoria: 'cafe-frio', precio: 12000 },
  { id: 'capuccino-frio-caramelo', nombre: 'Capuccino Frío de Caramelo', categoria: 'cafe-frio', precio: 12000 },
  { id: 'capuccino-frio-baileys', nombre: 'Capuccino Frío de Baileys', categoria: 'cafe-frio', precio: 14000 },
  { id: 'te-chai-frio', nombre: 'Té Chai Frío', categoria: 'cafe-frio', precio: 12000 },
  { id: 'malteada-cafe', nombre: 'Malteada de Café', categoria: 'cafe-frio', destacado: true, precio: 15900 },
  { id: 'milo-frio', nombre: 'Milo Frío', categoria: 'cafe-frio', precio: 11000 },

  // GRANIZADOS
  { id: 'frappuccino', nombre: 'Frappuccino', categoria: 'granizados', destacado: true, precio: 13500 },
  { id: 'malteadas-sabores', nombre: 'Malteadas', categoria: 'granizados', descripcion: 'Sabores: Vainilla, Frutos Rojos u Oreo.', precio: 15900 },
  { id: 'nevado', nombre: 'Nevado', categoria: 'granizados', precio: 15900 },

  // BRUNCH
  { id: 'tostadas-francesas', nombre: 'Tostadas Francesas', categoria: 'brunch', descripcion: 'Con tocineta, huevos y miel de maple.', destacado: true, precio: 28000 },
  { id: 'omelette-victoria', nombre: 'Omelette Victoria', categoria: 'brunch', descripcion: '3 huevos con mozzarella, tocineta ahumada, maíz y cebolla.', destacado: true, precio: 26000 },
  { id: 'omelette-mi-nona', nombre: 'Omelette Mi Nona', categoria: 'brunch', descripcion: 'Huevos rellenos de queso, tocineta, salchicha y jamón.', precio: 27000 },
  { id: 'waffles', nombre: 'Waffles', categoria: 'brunch', descripcion: 'Con tocineta, huevos y miel de maple.', destacado: true, precio: 30000 },
  { id: 'picada-chicharron', nombre: 'Picada de Chicharrón', categoria: 'brunch', descripcion: '300 gr de chicharrón con bollo y suero costeño.', precio: 40000 },
  { id: 'criollito-mi-nona', nombre: 'Criollito Mi Nona', categoria: 'brunch', descripcion: 'Empanadas, rosquetes y chicharrón.', precio: 37000 },

  // DESAYUNOS
  { id: 'pastelitos-pollo', nombre: 'Pastelitos de Pollo', categoria: 'desayunos', precio: 4000 },
  { id: 'rosquetes-queso-x2', nombre: 'Rosquetes de Queso x2', categoria: 'desayunos', precio: 12000 },
  { id: 'huevos-revueltos', nombre: 'Huevos Revueltos', categoria: 'desayunos', descripcion: 'Con bollo, arepas o pan francés.', destacado: true, precio: 11000 },
  { id: 'huevos-rancheros', nombre: 'Huevos Rancheros', categoria: 'desayunos', descripcion: 'Con bollo, arepas o pan francés.', precio: 14000 },

  // HAMBURGUESAS
  { id: 'crispy', nombre: 'Crispy', categoria: 'hamburguesas', descripcion: 'Pollo apanado, mozzarella, tocineta, lechuga y tomate.', precio: 28000 },
  { id: 'la-original', nombre: 'La Original', categoria: 'hamburguesas', descripcion: 'Carne Angus 150gr, cebolla, crema de Baileys y quesos.', destacado: true, precio: 33000 },
  { id: 'calle-grande', nombre: 'Calle Grande', categoria: 'hamburguesas', descripcion: 'Carne Angus, anillos de cebolla apanados.', precio: 35000 },
  { id: 'la-diosa-coronada', nombre: 'La Diosa Coronada', categoria: 'hamburguesas', descripcion: 'Carne Angus, mozzarella, tocineta y tomate.', destacado: true, precio: 34000 },
  { id: 'la-burguesa', nombre: 'La Burguesa', categoria: 'hamburguesas', descripcion: 'Carne Angus, lomo de cerdo marinado y queso cheddar.', precio: 37000 },
  { id: 'papas-francesa', nombre: 'Papas a la Francesa', categoria: 'hamburguesas', precio: 6000 },

  // PERROS CALIENTES
  { id: 'perro-tradicional', nombre: 'Tradicional', categoria: 'perros', descripcion: 'Salchicha, mozzarella y chispas de papa.', precio: 15000 },
  { id: 'perro-americano', nombre: 'Americano', categoria: 'perros', descripcion: 'Salchicha, cebolla grillé, jamón y chispas.', destacado: true, precio: 17000 },

  // PASTAS
  { id: 'spaguetti-alfredo', nombre: 'Spaguetti a la Alfredo', categoria: 'pastas', descripcion: 'Champiñones, pollo, jamón y queso parmesano.', destacado: true, precio: 32000 },
  { id: 'fetuccini-alfredo', nombre: 'Fettuccini Alfredo', categoria: 'pastas', descripcion: 'Champiñones, pollo, jamón y queso parmesano.', precio: 32000 },
  { id: 'fetuccini-alfredo-especial', nombre: 'Fettuccini Alfredo Especial', categoria: 'pastas', descripcion: 'Camarones, pollo, champiñones y jamón.', destacado: true, precio: 36000 },
  { id: 'pannecook-alfredo', nombre: 'Pannecook Alfredo', categoria: 'pastas', descripcion: 'Salsa alfredo, pollo, jamón, champiñones y queso.', precio: 32000 },

  // LASAÑA
  { id: 'lasagna-pollo', nombre: 'Lasaña de Pollo', categoria: 'lasagna', descripcion: 'Con salsa de crema de leche.', destacado: true, precio: 35000 },
  { id: 'lasagna-carne', nombre: 'Lasaña de Carne', categoria: 'lasagna', descripcion: 'Con salsa napolitana.', precio: 39000 },
  { id: 'lasagna-mixta', nombre: 'Lasaña Mixta', categoria: 'lasagna', descripcion: 'Pollo y carne.', precio: 38000 },
  { id: 'lasagna-champinones', nombre: 'Lasaña de Pollo con Champiñones', categoria: 'lasagna', descripcion: 'Champiñones frescos en salsa de crema.', precio: 37000 },

  // ENTRADAS Y APERITIVOS
  { id: 'ensalada-cesar', nombre: 'Ensalada César', categoria: 'entradas', destacado: true, precio: 28000 },
  { id: 'ensalada-verona', nombre: 'Ensalada Verona', categoria: 'entradas', precio: 29000 },
  { id: 'deditos-queso-x4', nombre: 'Deditos de Queso x4', categoria: 'entradas', precio: 13000 },
  { id: 'rib-pollo', nombre: 'Rib de Pollo', categoria: 'entradas', precio: 17000 },
  { id: 'dedito-horneado', nombre: 'Dedito Horneado', categoria: 'entradas', precio: 3500 },

  // PIZZAS PERSONALES (masa madre)
  { id: 'pizza-personal-jamon', nombre: 'Jamón', categoria: 'pizzas-personales', precio: 27000 },
  { id: 'pizza-personal-reina', nombre: 'La Reina', categoria: 'pizzas-personales', descripcion: 'Pollo barbacoa, chorizo, tocineta y albahaca.', destacado: true, precio: 29000 },
  { id: 'pizza-personal-hawaiana', nombre: 'Hawaiana', categoria: 'pizzas-personales', precio: 30000 },
  { id: 'pizza-personal-pepperoni', nombre: 'Pepperoni', categoria: 'pizzas-personales', precio: 32000 },
  { id: 'pizza-personal-cacica', nombre: 'La Cacica', categoria: 'pizzas-personales', descripcion: 'Pepperoni, tocineta, cerdo marinado y salchichón cervecero.', destacado: true, precio: 33000, imagen: 'https://minonacafe.com/wp-content/uploads/2024/11/Pizza-02-Mi-nona-cafe-valledupar.jpg' },
  { id: 'pizza-personal-mexicana', nombre: 'Mexicana', categoria: 'pizzas-personales', descripcion: 'Carne molida, maíz, nachos y queso cheddar.', precio: 31000 },
  { id: 'pizza-personal-vegetariana', nombre: 'Vegetariana', categoria: 'pizzas-personales', descripcion: 'Tomate, champiñones, cebolla, aceitunas y maíz.', precio: 29000 },
  { id: 'pizza-personal-mi-nona', nombre: 'Mi Nona', categoria: 'pizzas-personales', descripcion: 'Pollo, jamón, chorizo y tocineta.', destacado: true, precio: 32000 },
  { id: 'pizza-personal-borde-queso', nombre: 'Borde de Queso', categoria: 'pizzas-personales', precio: 8000 },

  // PIZZAS PEQUEÑAS
  { id: 'pizza-pequena-jamon', nombre: 'Jamón', categoria: 'pizzas-pequenas', precio: 38500 },
  { id: 'pizza-pequena-reina', nombre: 'La Reina', categoria: 'pizzas-pequenas', precio: 39500 },
  { id: 'pizza-pequena-hawaiana', nombre: 'Hawaiana', categoria: 'pizzas-pequenas', precio: 40000 },
  { id: 'pizza-pequena-pepperoni', nombre: 'Pepperoni', categoria: 'pizzas-pequenas', precio: 48500 },
  { id: 'pizza-pequena-cacica', nombre: 'La Cacica', categoria: 'pizzas-pequenas', destacado: true, precio: 51000 },
  { id: 'pizza-pequena-mexicana', nombre: 'Mexicana', categoria: 'pizzas-pequenas', precio: 41000 },
  { id: 'pizza-pequena-vegetariana', nombre: 'Vegetariana', categoria: 'pizzas-pequenas', precio: 41000 },
  { id: 'pizza-pequena-mi-nona', nombre: 'Mi Nona', categoria: 'pizzas-pequenas', precio: 48500 },
  { id: 'pizza-pequena-combinadas', nombre: 'Pizzas Combinadas', categoria: 'pizzas-pequenas', precio: 51000 },
  { id: 'pizza-pequena-borde-queso', nombre: 'Borde de Queso', categoria: 'pizzas-pequenas', precio: 12000 },

  // PIZZAS GRANDES
  { id: 'pizza-grande-jamon', nombre: 'Jamón', categoria: 'pizzas-grandes', precio: 58000 },
  { id: 'pizza-grande-reina', nombre: 'La Reina', categoria: 'pizzas-grandes', precio: 59500 },
  { id: 'pizza-grande-hawaiana', nombre: 'Hawaiana', categoria: 'pizzas-grandes', precio: 60000 },
  { id: 'pizza-grande-pepperoni', nombre: 'Pepperoni', categoria: 'pizzas-grandes', precio: 70500 },
  { id: 'pizza-grande-cacica', nombre: 'La Cacica', categoria: 'pizzas-grandes', destacado: true, precio: 74000 },
  { id: 'pizza-grande-mexicana', nombre: 'Mexicana', categoria: 'pizzas-grandes', precio: 63000 },
  { id: 'pizza-grande-vegetariana', nombre: 'Vegetariana', categoria: 'pizzas-grandes', precio: 59500 },
  { id: 'pizza-grande-mi-nona', nombre: 'Mi Nona', categoria: 'pizzas-grandes', destacado: true, precio: 72500 },
  { id: 'pizza-grande-combinadas', nombre: 'Pizzas Combinadas', categoria: 'pizzas-grandes', precio: 74000 },
  { id: 'pizza-grande-borde-queso', nombre: 'Borde de Queso', categoria: 'pizzas-grandes', precio: 16500 },

  // SÁNDWICHES
  { id: 'sandwich-clasico', nombre: 'Clásico', categoria: 'sandwich', descripcion: 'Jamón y queso mozzarella.', precio: 10500 },
  { id: 'sandwich-jamon-tocineta', nombre: 'Jamón y Tocineta', categoria: 'sandwich', precio: 15000 },
  { id: 'sandwich-especial', nombre: 'Especial', categoria: 'sandwich', descripcion: 'Pollo, jamón, queso y verduras frescas.', destacado: true, precio: 16000 },
  { id: 'sandwich-cubano', nombre: 'Cubano', categoria: 'sandwich', descripcion: 'Pollo, jamón, queso, cebolla, tomate y pepino.', precio: 21000 },
  { id: 'sandwich-son-cubano', nombre: 'Son Cubano', categoria: 'sandwich', descripcion: 'Cerdo marinado, jamón, queso y pepino.', precio: 24000 },
  { id: 'sandwich-mi-nona', nombre: 'Mi Nona', categoria: 'sandwich', descripcion: '3 pisos con pollo, tocineta, jamón, queso y verduras.', destacado: true, precio: 30000 },

  // BEBIDAS
  { id: 'gaseosa', nombre: 'Gaseosa', categoria: 'bebidas', precio: 6000 },
  { id: 'agua-hatsu', nombre: 'Agua Hat Su', categoria: 'bebidas', precio: 6000 },
  { id: 'bretana', nombre: 'Bretaña', categoria: 'bebidas', precio: 7000 },
  { id: 'canada-dry', nombre: 'Canada Dry', categoria: 'bebidas', precio: 8000 },
  { id: 'soda-hatsu', nombre: 'Soda Hat Su', categoria: 'bebidas', precio: 9000 },
  { id: 'heineken', nombre: 'Heineken', categoria: 'bebidas', precio: 9000 },
  { id: 'club-colombia', nombre: 'Club Colombia Dorada', categoria: 'bebidas', precio: 9000 },
  { id: 'stella-artois', nombre: 'Stella Artois', categoria: 'bebidas', precio: 10000 },
  { id: 'vino-copa-santa-helena', nombre: 'Vino Copa Santa Helena', categoria: 'bebidas', precio: 22000 },
  { id: 'vino-huerta', nombre: 'Vino Tinto La Huerta', categoria: 'bebidas', precio: 63000 },
  { id: 'vino-lambrusco-tinto', nombre: 'Vino Lambrusco Tinto', categoria: 'bebidas', precio: 70000 },
  { id: 'vino-lambrusco-rosado', nombre: 'Vino Lambrusco Rosado', categoria: 'bebidas', precio: 70000 },
  { id: 'vino-espumoso-rosado', nombre: 'Vino Espumoso Frizzantino Rosado', categoria: 'bebidas', precio: 50000 },
  { id: 'vino-espumoso-blanco', nombre: 'Vino Espumoso Frizzantino Blanco', categoria: 'bebidas', precio: 50000 },
  { id: 'vino-rosaleda', nombre: 'Vino Rosado Rosaleda 750ml', categoria: 'bebidas', precio: 50000 },

  // JUGOS
  { id: 'jugo-corozo', nombre: 'Jugo de Corozo', categoria: 'jugos', precio: 10000 },
  { id: 'jugo-fresa', nombre: 'Jugo de Fresa', categoria: 'jugos', precio: 10000 },
  { id: 'jugo-lulo', nombre: 'Jugo de Lulo', categoria: 'jugos', destacado: true, precio: 10000 },
  { id: 'jugo-maracuya', nombre: 'Jugo de Maracuyá', categoria: 'jugos', precio: 10000 },
  { id: 'jugo-zapote', nombre: 'Jugo de Zapote', categoria: 'jugos', precio: 10000 },
  { id: 'limonada-natural', nombre: 'Limonada Natural', categoria: 'jugos', destacado: true, precio: 10000 },
  { id: 'limonada-cerezada', nombre: 'Limonada Cerezada', categoria: 'jugos', precio: 11000 },
  { id: 'limonada-coco', nombre: 'Limonada de Coco', categoria: 'jugos', precio: 13000 },
  { id: 'limonada-cafe', nombre: 'Limonada de Café', categoria: 'jugos', precio: 10000 },
  { id: 'limonada-hierbabuena', nombre: 'Limonada de Hierbabuena', categoria: 'jugos', precio: 12000 },

  // ADICIONALES
  { id: 'adicional-carne', nombre: 'Adicional de Carne', categoria: 'sandwich', precio: 9000 },
  { id: 'adicional-pollo', nombre: 'Adicional de Pollo Apanado', categoria: 'sandwich', precio: 7000 },
  { id: 'adicional-queso', nombre: 'Adicional de Queso Mozzarella', categoria: 'sandwich', precio: 3000 },
]
