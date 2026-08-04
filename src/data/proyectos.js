// proyectos.js guarda la info de cada proyecto real, para que Proyectos.jsx
// solo se preocupe de pintarla. Todos los links son reales: un reclutador
// que haga clic aqui llega al codigo de verdad, no a una maqueta.

// destacados son los proyectos "grandes": los que tienen backend real,
// base de datos real y (cuando aplica) demo en vivo. Se pintan como
// posts grandes, con captura de pantalla.
export const proyectosDestacados = [
  {
    id: 'serix-chat',
    nombre: 'Serix Chat',
    resumen: 'Clon de WhatsApp con login real, conversaciones privadas entre usuarios registrados y mensajes en tiempo real.',
    detalle:
      'Cada conversacion conecta a dos cuentas reales de Supabase Auth (nada de contactos inventados). La privacidad la garantiza Row Level Security en Postgres, no el frontend, y los mensajes nuevos aparecen solos gracias a Supabase Realtime.',
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Vercel'],
    destacarReact: true,
    imagen: 'serix-chat.jpg',
    codigo: 'https://github.com/Sergioh98/serix-chat',
    demo: 'https://serix-chat-ashy.vercel.app',
    demoLabel: 'Ver demo en vivo',
    fecha: '2026',
  },
  {
    id: 'serix-credito',
    nombre: 'SERIX Credito',
    resumen: 'Plataforma SaaS multiempresa para gestion de creditos y cobranza, con app web de administracion y app movil Android offline-first.',
    detalle:
      'Monorepo con backend en Supabase (Postgres + RLS + Edge Functions), panel web para administradores/supervisores/caja, y una app Android para cobradores en campo pensada para funcionar sin internet.',
    stack: ['React', 'TypeScript', 'Supabase', 'Android', 'Turborepo'],
    destacarReact: true,
    imagen: null,
    codigo: null,
    codigoNota: 'Repositorio privado — acceso bajo solicitud',
    demo: 'https://serix-credito-admin-web.vercel.app',
    demoLabel: 'Ver panel de administración',
    fecha: '2026',
  },
]

// otros son proyectos mas chicos (HTML/CSS/JS puro), buenos para mostrar
// continuidad y variedad, pero sin backend ni demo propia. Se pintan como
// posts chicos, en una fila.
export const otrosProyectos = [
  {
    id: 'caracolmarino',
    nombre: 'Caracol Marino',
    resumen: 'Menú digital responsive para restaurante.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    codigo: 'https://github.com/Sergioh98/caracolmarino',
  },
  {
    id: 'paslucho',
    nombre: 'Paslucho',
    resumen: 'Sitio de una sola página, maquetado y estilos a medida.',
    stack: ['HTML', 'CSS'],
    codigo: 'https://github.com/Sergioh98/paslucho',
  },
  {
    id: 'automatizaciones-consultorios',
    nombre: 'Automatizaciones Consultorios',
    resumen: 'Landing page para automatizar procesos de consultorios médicos.',
    stack: ['HTML', 'CSS'],
    codigo: 'https://github.com/Sergioh98/AUTOMATIZACIONES-CONSULTORIOS',
  },
]
