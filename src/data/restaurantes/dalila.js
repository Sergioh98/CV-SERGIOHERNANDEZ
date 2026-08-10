// Datos reales de Dalila Café Bar (Valledupar), tomados de
// dalilavalledupar.com. Es la única fuente de verdad del menú de este
// restaurante.
//
// A diferencia del brief inicial, el sitio real de Dalila NO publica
// "almuerzos empresariales" ni servicios de cumpleaños/eventos — su
// fuerte confirmado es café + desayunos/brunch + una carta completa de
// restaurante-bar (platos fuertes, pastas, pizzetas, cócteles, licores
// y vinos). El Hero se ajusta a eso, no se inventan esos servicios.
export const restaurante = {
  id: 'dalila',
  nombre: 'Dalila',
  nombreCompleto: 'Dalila Café Bar',
  frase: 'Nada me detiene',
  categoriaPrincipal: 'Café · Desayunos · Restaurante-Bar',
  ciudad: 'Valledupar, Colombia',
  direccion: 'Calle 9D #11-06, Valledupar, Cesar',
  whatsapp: '573205949634',
  telefonoVisible: '+57 320 594 9634',
  email: 'dalilarestaurantebar@gmail.com',
  horario: 'Lunes a domingo: 8:00 a.m. — 10:00 p.m. (viernes y sábado hasta 2:00 a.m.)',
  mapaUrl: 'https://maps.google.com/?q=Dalila+Cafe+Bar+Calle+9D+%2311-06+Valledupar',
  sitioOriginal: 'https://dalilavalledupar.com/',
  // TODO: no se encontraron enlaces a redes sociales en el sitio original — confirmar y reemplazar.
  redes: {
    instagram: 'https://instagram.com/dalilacafebar',
    facebook: 'https://facebook.com/dalilacafebar',
  },
  logo: 'https://dalilavalledupar.com/wp-content/uploads/2023/07/Logo-Nuevo-003.png',
}

export const categorias = [
  { id: 'desayunos', nombre: 'Desayunos', icono: 'ri-sun-line' },
  { id: 'omelettes', nombre: 'Omelettes', icono: 'ri-bowl-line' },
  { id: 'brunch', nombre: 'Brunch', icono: 'ri-restaurant-2-line' },
  { id: 'cafe', nombre: 'Café', icono: 'ri-cup-line' },
  { id: 'cafe-frio', nombre: 'Bebidas Frías', icono: 'ri-goblet-line' },
  { id: 'postres', nombre: 'Postres', icono: 'ri-cake-2-line' },
  { id: 'entradas', nombre: 'Entradas', icono: 'ri-restaurant-line' },
  { id: 'infantil', nombre: 'Infantil', icono: 'ri-emotion-happy-line' },
  { id: 'ensaladas', nombre: 'Ensaladas', icono: 'ri-leaf-line' },
  { id: 'platos-fuertes', nombre: 'Platos Fuertes', icono: 'ri-restaurant-2-line' },
  { id: 'arroces', nombre: 'Arroces', icono: 'ri-bowl-line' },
  { id: 'pastas', nombre: 'Pastas', icono: 'ri-restaurant-line' },
  { id: 'lasagna', nombre: 'Lasaña', icono: 'ri-restaurant-line' },
  { id: 'pizzetas', nombre: 'Pizzetas', icono: 'ri-pizza-line' },
  { id: 'hamburguesas', nombre: 'Hamburguesas', icono: 'ri-copper-coin-line' },
  { id: 'sandwich', nombre: 'Sándwich', icono: 'ri-sandwich-line' },
  { id: 'cocteles', nombre: 'Cócteles', icono: 'ri-goblet-2-line' },
  { id: 'licores', nombre: 'Licores', icono: 'ri-goblet-2-line' },
  { id: 'vinos', nombre: 'Vinos', icono: 'ri-goblet-2-line' },
  { id: 'jugos', nombre: 'Jugos', icono: 'ri-drop-line' },
  { id: 'bebidas', nombre: 'Bebidas', icono: 'ri-cup-line' },
]

export const coloresPorCategoria = {
  desayunos: ['#C6386F', '#4A0F28'],
  omelettes: ['#D9A441', '#5C3C10'],
  brunch: ['#C6386F', '#4A0F28'],
  cafe: ['#6B4226', '#2B1B10'],
  'cafe-frio': ['#A62C6C', '#3D0F26'],
  postres: ['#D9A441', '#5C3C10'],
  entradas: ['#A62C6C', '#3D0F26'],
  infantil: ['#D9A441', '#5C3C10'],
  ensaladas: ['#5C8A4A', '#1F3319'],
  'platos-fuertes': ['#8E2050', '#33091C'],
  arroces: ['#8E2050', '#33091C'],
  pastas: ['#C97A2E', '#5C2E10'],
  lasagna: ['#C97A2E', '#5C2E10'],
  pizzetas: ['#B23A22', '#4A1509'],
  hamburguesas: ['#B23A22', '#4A1509'],
  sandwich: ['#C97A2E', '#5C2E10'],
  cocteles: ['#A62C6C', '#3D0F26'],
  licores: ['#5C1030', '#20050F'],
  vinos: ['#5C1030', '#20050F'],
  jugos: ['#5C8A4A', '#1F3319'],
  bebidas: ['#8E2050', '#33091C'],
}

const IMG = 'https://dalilavalledupar.com/wp-content/uploads'

export const productos = [
  // DESAYUNOS
  { id: 'rosquetes', nombre: 'Rosquetes', categoria: 'desayunos', precio: 12000 },
  { id: 'huevos-al-gusto', nombre: 'Huevos al Gusto', categoria: 'desayunos', descripcion: 'Revueltos, con jamón, tocineta o rancheros.', destacado: true, precio: 15000 },
  { id: 'huevos-napolitanos', nombre: 'Huevos Napolitanos', categoria: 'desayunos', descripcion: 'Cacerola de huevos al horno en salsa pomodoro con champiñones, cebolla y tomate, gratinados con mozzarella.', destacado: true, precio: 24000 },
  { id: 'huevos-florentina', nombre: 'Huevos a la Florentina', categoria: 'desayunos', descripcion: 'Huevos al horno sobre espinacas, tomate, tocineta y queso mozzarella.', precio: 28000 },
  { id: 'picada-chicharron', nombre: 'Picada de Chicharrón', categoria: 'desayunos', descripcion: 'Crujiente panceta especial de cerdo con bollo y suero costeño.', imagen: `${IMG}/2024/01/Picada-de-chicharron-022.jpg`, destacado: true, precio: 29000 },
  { id: 'tipico-dalila', nombre: 'Típico Dalila', categoria: 'desayunos', descripcion: '2 salchichas rancheras, chicharrón, 3 rosquetes y 3 huevos.', destacado: true, precio: 34500 },

  // OMELETTES
  { id: 'omelette-espinaca', nombre: 'Omelette de Espinaca', categoria: 'omelettes', descripcion: 'Espinacas salteadas en aceite de oliva sobre queso mozzarella.', precio: 18000 },
  { id: 'omelette-vegetariano', nombre: 'Omelette Vegetariano', categoria: 'omelettes', descripcion: 'Huevos rellenos con vegetales frescos.', precio: 19000 },
  { id: 'omelette-dalila', nombre: 'Dalila', categoria: 'omelettes', descripcion: 'Tocineta, jamón, maíz, queso mozzarella y cebolla caramelizada.', destacado: true, precio: 25000 },
  { id: 'omelette-3-estaciones', nombre: 'Omelette 3 Estaciones', categoria: 'omelettes', descripcion: 'Jamón, tocineta, ranchera y mozzarella.', precio: 28000 },

  // BRUNCH
  { id: 'tostadas-francesas', nombre: 'Tostadas Francesas', categoria: 'brunch', descripcion: 'Pan dorado bañado en chocolate o miel de maple con huevos y tocineta.', imagen: `${IMG}/2023/11/Brunch.jpg`, destacado: true, precio: 25000 },
  { id: 'chicken-waffles', nombre: 'Chicken Waffles', categoria: 'brunch', descripcion: 'Gofres esponjosos con pollo apanado en panko y miel de maple.', destacado: true, precio: 25000 },
  { id: 'waffle', nombre: 'Waffle', categoria: 'brunch', descripcion: 'Gofres con huevos en tortilla, tocineta ahumada y miel de maple.', precio: 26000 },

  // CAFÉ
  { id: 'tinto', nombre: 'Tinto', categoria: 'cafe', destacado: true, precio: 4500 },
  { id: 'aromatica', nombre: 'Aromática', categoria: 'cafe', precio: 5000 },
  { id: 'cafe-expreso', nombre: 'Café Expreso', categoria: 'cafe', precio: 5000 },
  { id: 'cafe-americano', nombre: 'Café Americano', categoria: 'cafe', destacado: true, precio: 5500 },
  { id: 'cafe-con-leche', nombre: 'Café con Leche', categoria: 'cafe', precio: 5500 },
  { id: 'cortado', nombre: 'Cortado', categoria: 'cafe', precio: 6000 },
  { id: 'chocolate', nombre: 'Chocolate', categoria: 'cafe', precio: 6000 },
  { id: 'milo-caliente', nombre: 'Milo Caliente', categoria: 'cafe', precio: 6000 },
  { id: 'macchiato', nombre: 'Macchiato', categoria: 'cafe', precio: 8000 },
  { id: 'latte', nombre: 'Latte', categoria: 'cafe', destacado: true, precio: 7500 },
  { id: 'cappuccino', nombre: 'Cappuccino', categoria: 'cafe', destacado: true, precio: 7500 },
  { id: 'mocaccino', nombre: 'Mocaccino', categoria: 'cafe', precio: 8500 },
  { id: 'te-chai', nombre: 'Té Chai', categoria: 'cafe', precio: 9500 },
  { id: 'cappuccino-vainilla', nombre: 'Cappuccino de Vainilla', categoria: 'cafe', precio: 9500 },
  { id: 'cappuccino-carbon-activado', nombre: 'Cappuccino de Carbón Activado', categoria: 'cafe', precio: 10000 },
  { id: 'cappuccino-baileys', nombre: 'Cappuccino de Baileys', categoria: 'cafe', precio: 10000 },

  // BEBIDAS FRÍAS DE CAFÉ
  { id: 'latte-frio', nombre: 'Latte Frío', categoria: 'cafe-frio', destacado: true, precio: 9000 },
  { id: 'te-chai-frio', nombre: 'Té Chai Frío', categoria: 'cafe-frio', precio: 10500 },
  { id: 'frappuccino', nombre: 'Frappuccino', categoria: 'cafe-frio', destacado: true, precio: 10500 },
  { id: 'capuccino-frio-vainilla', nombre: 'Capuccino Frío de Vainilla', categoria: 'cafe-frio', precio: 10500 },
  { id: 'capuccino-frio-baileys', nombre: 'Capuccino Frío de Baileys', categoria: 'cafe-frio', precio: 11500 },

  // POSTRES
  { id: 'porcion-torta-zanahoria', nombre: 'Porción de Torta de Zanahoria', categoria: 'postres', precio: 9000 },
  { id: 'porcion-trufas-chocolate', nombre: 'Porción de Torta de Trufas de Chocolate', categoria: 'postres', destacado: true, precio: 10000 },
  { id: 'flan-porcion', nombre: 'Flan Porción', categoria: 'postres', imagen: `${IMG}/2024/01/pay.jpg`, precio: 10000 },
  { id: 'pie-frutos-rojos', nombre: 'Pie de Frutos Rojos', categoria: 'postres', imagen: `${IMG}/2024/01/pay.jpg`, destacado: true, precio: 12000 },
  { id: 'pie-maracuya', nombre: 'Pie de Maracuyá', categoria: 'postres', precio: 12000 },

  // ENTRADAS
  { id: 'croquetas-pulpo', nombre: 'Croquetas de Pulpo', categoria: 'entradas', descripcion: 'Crujientes croquetas rellenas de pulpo en salsa de mariscos y vino tinto.', destacado: true, precio: 25500 },
  { id: 'bocados-salmon', nombre: 'Bocados de Salmón', categoria: 'entradas', descripcion: 'Esferas crocantes con salmón, queso crema y espinacas.', precio: 27000 },
  { id: 'camarones-huancaina', nombre: 'Camarones a la Huancaína', categoria: 'entradas', descripcion: '200g de camarones frescos en salsa huancaína peruana con almendras.', destacado: true, precio: 33000 },

  // INFANTIL
  { id: 'para-compartir', nombre: 'Para Compartir', categoria: 'infantil', descripcion: 'Palitos de queso.', precio: 12000 },
  { id: 'rips-pollo', nombre: 'Rips de Pollo', categoria: 'infantil', descripcion: 'Cortes apanados con papas a la francesa.', destacado: true, precio: 20000 },

  // ENSALADAS
  { id: 'ensalada-cesar', nombre: 'César', categoria: 'ensaladas', destacado: true, precio: 25000 },

  // PLATOS FUERTES
  { id: 'pechuga-asada', nombre: 'Pechuga Asada', categoria: 'platos-fuertes', descripcion: '250g al josper con ensalada y puré.', precio: 39000 },
  { id: 'pollo-gratinado', nombre: 'Pollo Gratinado', categoria: 'platos-fuertes', descripcion: 'Pechuga en crema de queso azul, gratinada.', precio: 40000 },
  { id: 'pollo-parisina', nombre: 'Pollo a la Parisina', categoria: 'platos-fuertes', descripcion: 'Pechuga marinada en crema de champiñones y tocineta.', destacado: true, precio: 42000 },
  { id: 'lomo-roquefort', nombre: 'Lomo al Roquefort', categoria: 'platos-fuertes', descripcion: '250g de solomillo en salsa de queso roquefort.', precio: 47000 },
  { id: 'lomo-salteado', nombre: 'Lomo Salteado', categoria: 'platos-fuertes', descripcion: '200g de lomo salteado con verduras frescas.', precio: 51000 },
  { id: 'caldereta-mariscos', nombre: 'Caldereta de Mariscos', categoria: 'platos-fuertes', descripcion: 'Mixtura de mariscos en salsa napolitana.', precio: 53500 },
  { id: 'salmon-arroz-cremoso', nombre: 'Salmón en Arroz Cremoso al Fungi', categoria: 'platos-fuertes', descripcion: 'Salmón horneado sobre arroz con champiñones.', destacado: true, precio: 53000 },
  { id: 'lomo-napolitano', nombre: 'Lomo Napolitano', categoria: 'platos-fuertes', descripcion: '250g de lomo fino en salsa napolitana.', precio: 54000 },
  { id: 'cazuela-marisco', nombre: 'Cazuela de Marisco', categoria: 'platos-fuertes', descripcion: 'Camarones, mejillones y crema de leche.', precio: 59500 },
  { id: 'baby-beef', nombre: 'Baby Beef', categoria: 'platos-fuertes', descripcion: '220g de lomo fino al josper.', destacado: true, precio: 58000 },
  { id: 'picanha-josper', nombre: 'Picanha al Josper', categoria: 'platos-fuertes', descripcion: '300g de carne con mantequilla maître.', precio: 71000 },
  { id: 'beef-chorizo', nombre: 'Beef Chorizo', categoria: 'platos-fuertes', descripcion: '350g de corte grueso al josper.', imagen: `${IMG}/2025/01/Bife-Chorizo-00015.jpg`, destacado: true, precio: 75000 },

  // ARROCES
  { id: 'arroz-dalila', nombre: 'Arroz Dalila', categoria: 'arroces', descripcion: 'Arroz moreno con lomo fino de res, pollo y crujientes chicharrones.', destacado: true, precio: 45000 },
  { id: 'arroz-mediterraneo', nombre: 'Arroz Mediterráneo', categoria: 'arroces', descripcion: 'Arroz con mixtura de mariscos, camarones y mejillones.', precio: 51000 },

  // PASTAS
  { id: 'penne-pesto', nombre: 'Penne al Pesto', categoria: 'pastas', descripcion: 'Pasta al dente en salsa verde.', precio: 30000 },
  { id: 'penne-pesto-pollo', nombre: 'Penne al Pesto con Pollo', categoria: 'pastas', descripcion: 'Con pollo parrillado.', destacado: true, precio: 35000 },
  { id: 'fettuccini-queso', nombre: 'Fettuccini en Salsa de Queso', categoria: 'pastas', descripcion: 'Combinación de quesos mozzarella, parmesano y azul.', precio: 37000 },
  { id: 'spaghetti-bolonesa', nombre: 'Spaghetti a la Boloñesa', categoria: 'pastas', descripcion: 'Salsa pomodoro y carne.', imagen: `${IMG}/2023/11/Pasta-02.jpg`, destacado: true, precio: 38000 },
  { id: 'fettuccini-alfredo', nombre: 'Fettuccini Alfredo', categoria: 'pastas', descripcion: 'Pollo, champiñón y cebolla.', precio: 40000 },
  { id: 'pastas-amatriciana', nombre: 'Pastas a la Amatriciana', categoria: 'pastas', descripcion: 'Tocineta, ajo, cebolla, tomate y queso búfala.', precio: 43000 },
  { id: 'fettuccini-mediterraneo', nombre: 'Fettuccini Mediterráneo', categoria: 'pastas', descripcion: 'Camarones, queso parmesano y salsa napolitana.', destacado: true, precio: 49000 },
  { id: 'fettuccini-lomo-saltado', nombre: 'Fettuccini con Lomo Saltado', categoria: 'pastas', descripcion: 'Lomo fino en salsa blanca.', precio: 52000 },

  // LASAÑA
  { id: 'lasagna-pollo', nombre: 'Lasaña de Pollo', categoria: 'lasagna', descripcion: 'Pasta intercalada con pollo y quesos.', destacado: true, precio: 38000 },
  { id: 'lasagna-carne', nombre: 'Lasaña de Carne', categoria: 'lasagna', descripcion: 'Carne humedecida en salsa napolitana.', precio: 39000 },
  { id: 'lasagna-mixta', nombre: 'Lasaña Mixta', categoria: 'lasagna', descripcion: 'Combinación de carne y pollo en salsa napolitana.', precio: 41000 },

  // PIZZETAS
  { id: 'pizzeta-dulce', nombre: 'Dulce', categoria: 'pizzetas', precio: 31000 },
  { id: 'pizzeta-jamon', nombre: 'Jamón', categoria: 'pizzetas', precio: 31000 },
  { id: 'pizzeta-vegetariana', nombre: 'Vegetariana', categoria: 'pizzetas', precio: 32000 },
  { id: 'pizzeta-dulce-especial', nombre: 'Dulce Especial', categoria: 'pizzetas', descripcion: 'Pollo, piña confitada y jamón.', precio: 38000 },
  { id: 'pizzeta-italiana', nombre: 'Italiana', categoria: 'pizzetas', descripcion: 'Peperoni en salsa pomodoro.', imagen: `${IMG}/2024/01/Pizza-02121212.jpg`, destacado: true, precio: 39000 },
  { id: 'pizzeta-apasionada', nombre: 'Apasionada', categoria: 'pizzetas', descripcion: 'Pollo, peperoni, chorizo español y champiñones.', precio: 38500 },
  { id: 'pizzeta-dalila', nombre: 'Dalila', categoria: 'pizzetas', descripcion: 'Pechuga, peperoni, tocineta, cebolla caramelizada y albahaca fresca.', destacado: true, precio: 41000 },
  { id: 'pizzeta-aventurera', nombre: 'Aventurera', categoria: 'pizzetas', descripcion: 'Jamón, aceitunas, tomates secos y queso boconcinni.', precio: 45000 },

  // HAMBURGUESAS
  { id: 'american-burger', nombre: 'American Burger', categoria: 'hamburguesas', descripcion: '150g blend de carne al josper, tocineta, queso y verduras.', destacado: true, precio: 29500 },
  { id: 'cheese-burger', nombre: 'Cheese Burger', categoria: 'hamburguesas', descripcion: '150g blend, tocineta en salsa BBQ y doble cheddar.', destacado: true, precio: 30500 },
  { id: 'papas-francesa-dalila', nombre: 'Papas a la Francesa', categoria: 'hamburguesas', precio: 6000 },

  // SÁNDWICH
  { id: 'club-sandwich', nombre: 'Club Sándwich', categoria: 'sandwich', descripcion: '3 niveles con pollo, tocineta, jamón, queso y verduras.', destacado: true, precio: 30500 },

  // CÓCTELES
  { id: 'sodas-saborizadas', nombre: 'Sodas Saborizadas', categoria: 'cocteles', precio: 18000 },
  { id: 'caipirina', nombre: 'Caipiriña', categoria: 'cocteles', precio: 22000 },
  { id: 'cuba-libre', nombre: 'Cuba Libre', categoria: 'cocteles', precio: 23000 },
  { id: 'margarita-maracuya', nombre: 'Margarita de Maracuyá', categoria: 'cocteles', precio: 24000 },
  { id: 'margarita-tradicional', nombre: 'Margarita Tradicional', categoria: 'cocteles', destacado: true, precio: 24000 },
  { id: 'margarita-fresa', nombre: 'Margarita de Fresa', categoria: 'cocteles', precio: 24000 },
  { id: 'mojito-cubano', nombre: 'Mojito Cubano', categoria: 'cocteles', destacado: true, precio: 25000 },
  { id: 'tinto-verano', nombre: 'Tinto de Verano', categoria: 'cocteles', precio: 25000 },
  { id: 'copa-sangria', nombre: 'Copa de Sangría', categoria: 'cocteles', precio: 25000 },
  { id: 'pina-colada', nombre: 'Piña Colada', categoria: 'cocteles', destacado: true, precio: 26000 },
  { id: 'tequila-sunrise', nombre: 'Tequila Sunrise', categoria: 'cocteles', precio: 27000 },
  { id: 'cosmopolitan', nombre: 'Cosmopolitan', categoria: 'cocteles', precio: 28000 },
  { id: 'gin-tonic', nombre: 'Gin Tonic', categoria: 'cocteles', precio: 28000 },
  { id: 'moscow-mule', nombre: 'Moscow Mule', categoria: 'cocteles', precio: 29000 },
  { id: 'jarra-sangria', nombre: 'Jarra de Sangría', categoria: 'cocteles', precio: 120000 },

  // LICORES
  { id: 'jp-chenet-lata', nombre: 'JP Chenet Rosé Lata', categoria: 'licores', precio: 25000 },
  { id: 'aguardiente-costeno-375', nombre: 'Aguardiente Costeño 375ml', categoria: 'licores', precio: 50000 },
  { id: 'aguardiente-costeno-750', nombre: 'Aguardiente Costeño 750ml', categoria: 'licores', destacado: true, precio: 90000 },
  { id: 'aguardiente-antioqueno-750', nombre: 'Aguardiente Antioqueño 750ml', categoria: 'licores', precio: 110000 },
  { id: 'tequila-jose-cuervo', nombre: 'Tequila José Cuervo Especial Reposado 750ml', categoria: 'licores', precio: 190000 },
  { id: 'buchanans-12-375', nombre: "Buchanan's 12 Años 375ml", categoria: 'licores', precio: 190000 },
  { id: 'old-parr-500', nombre: 'Old Parr 500ml', categoria: 'licores', precio: 220000 },
  { id: 'buchanans-12-750', nombre: "Buchanan's 12 Años 750ml", categoria: 'licores', destacado: true, precio: 290000 },
  { id: 'old-parr-750', nombre: 'Old Parr 750ml', categoria: 'licores', precio: 280000 },
  { id: 'buchanans-master-750', nombre: "Buchanan's Master 750ml", categoria: 'licores', precio: 330000 },
  { id: 'glenmorangie-750', nombre: 'Glenmorangie 750ml', categoria: 'licores', precio: 330000 },
  { id: 'buchanans-18-750', nombre: "Buchanan's 18 Años 750ml", categoria: 'licores', destacado: true, precio: 480000 },
  { id: 'tequila-silver-1800', nombre: 'Tequila Silver 1800', categoria: 'licores', precio: 420000 },
  { id: 'trago-buchanans-12', nombre: "Trago de Buchanan's 12 Años", categoria: 'licores', precio: 28000 },
  { id: 'trago-old-parr', nombre: 'Trago de Old Parr', categoria: 'licores', precio: 28000 },
  { id: 'trago-buchanans-master', nombre: "Trago de Buchanan's Master", categoria: 'licores', precio: 32000 },

  // VINOS
  { id: 'vino-frizzantino-espumoso', nombre: 'Vino Frizzantino Espumoso', categoria: 'vinos', precio: 70000 },
  { id: 'vino-terra-vega', nombre: 'Vino Tinto Terra Vega Cabernet Sauvignon', categoria: 'vinos', precio: 76000 },
  { id: 'vino-moras-chardonnay', nombre: 'Vino Blanco Las Moras Chardonnay', categoria: 'vinos', precio: 110000 },
  { id: 'vino-moras-malbec', nombre: 'Vino Tinto Las Moras Malbec', categoria: 'vinos', precio: 110000 },
  { id: 'vino-tarapaca', nombre: 'Vino Tinto Tarapacá Cabernet Sauvignon', categoria: 'vinos', destacado: true, precio: 115000 },
  { id: 'vino-la-celia', nombre: 'Vino Tinto La Celia Reserva Malbec', categoria: 'vinos', precio: 120000 },
  { id: 'vino-jp-chenet-ice', nombre: 'Vino Espumoso JP Chenet Ice Rosado', categoria: 'vinos', precio: 120000 },
  { id: 'vino-ramon-bilbao-tinto', nombre: 'Vino Tinto Ramón Bilbao Crianza Tempranillo', categoria: 'vinos', precio: 130000 },
  { id: 'vino-ramon-bilbao-blanco', nombre: 'Vino Blanco Ramón Bilbao Verdejo', categoria: 'vinos', precio: 130000 },
  { id: 'vino-ramon-bilbao-rosado', nombre: 'Vino Rosado Ramón Bilbao', categoria: 'vinos', precio: 130000 },
  { id: 'vino-chandon-extra-brut', nombre: 'Vino Espumoso Chandon Extra Brut', categoria: 'vinos', destacado: true, precio: 140000 },
  { id: 'copa-vino', nombre: 'Copa de Vino', categoria: 'vinos', precio: 25000 },

  // JUGOS
  { id: 'jugo-naranja', nombre: 'Jugo de Naranja 100% Natural', categoria: 'jugos', destacado: true, precio: 10000 },
  { id: 'jugos-naturales', nombre: 'Jugos Naturales', categoria: 'jugos', descripcion: 'Sabores de temporada disponibles.', precio: 9000 },

  // BEBIDAS
  { id: 'agua', nombre: 'Agua', categoria: 'bebidas', precio: 6000 },
  { id: 'gaseosa', nombre: 'Gaseosa', categoria: 'bebidas', precio: 6000 },
  { id: 'bretana', nombre: 'Bretaña', categoria: 'bebidas', precio: 6000 },
  { id: 'canada-dry', nombre: 'Canada Dry', categoria: 'bebidas', precio: 6000 },
  { id: 'limonada-natural', nombre: 'Limonada Natural', categoria: 'bebidas', destacado: true, precio: 9000 },
  { id: 'limonada-cafe', nombre: 'Limonada de Café', categoria: 'bebidas', precio: 9000 },
  { id: 'te-hatsu', nombre: 'Té Hatsu', categoria: 'bebidas', precio: 9000 },
  { id: 'club-colombia', nombre: 'Club Colombia', categoria: 'bebidas', precio: 9000 },
  { id: 'heineken', nombre: 'Heineken', categoria: 'bebidas', precio: 9000 },
  { id: 'limonada-cerezada', nombre: 'Limonada Cerezada', categoria: 'bebidas', precio: 10000 },
  { id: 'limonada-coco', nombre: 'Limonada de Coco', categoria: 'bebidas', precio: 12000 },
  { id: 'limonada-hierbabuena', nombre: 'Limonada de Hierbabuena', categoria: 'bebidas', precio: 12000 },
  { id: 'corona', nombre: 'Corona', categoria: 'bebidas', precio: 12000 },
  { id: 'limonada-coco-hierbabuena', nombre: 'Limonada de Coco y Hierbabuena', categoria: 'bebidas', precio: 13000 },
]
