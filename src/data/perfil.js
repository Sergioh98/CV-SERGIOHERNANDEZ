// perfil.js centraliza los datos personales/de contacto, para no repetir
// el mismo texto en varios componentes.
export const perfil = {
  nombre: 'SERGIO HERNANDEZ',
  rol: 'Full-Stack Web Developer',
  bio: 'Desarrollador Web Full-Stack enfocado en construir productos digitales reales: interfaces con React, backends con Supabase, y despliegues en producción de principio a fin. Combino diseño de interfaces (UI) con desarrollo Frontend y Backend.',
  email: 'sahp2017@gmail.com',
  github: 'https://github.com/Sergioh98',
  linkedin: '#',
  cvPdf: 'cv.pdf',
}

// skills: React va primero y marcado como "principal" a proposito — es
// justo lo que se quiere destacar frente a un reclutador.
export const skills = [
  { nombre: 'React', icono: 'devicon-react-original colored', principal: true },
  { nombre: 'JavaScript', icono: 'devicon-javascript-plain colored' },
  { nombre: 'Vite', icono: 'devicon-vitejs-plain colored' },
  { nombre: 'Supabase', icono: 'devicon-supabase-plain colored' },
  { nombre: 'PostgreSQL', icono: 'devicon-postgresql-plain colored' },
  { nombre: 'HTML5', icono: 'devicon-html5-plain colored' },
  { nombre: 'CSS3', icono: 'devicon-css3-plain colored' },
  { nombre: 'PHP', icono: 'devicon-php-plain colored' },
  { nombre: 'MySQL', icono: 'devicon-mysql-plain colored' },
  { nombre: 'Git', icono: 'devicon-git-plain colored' },
]

// experiencia: la timeline de la version original, mas una fila nueva que
// refleja el trabajo real y demostrable con React + Supabase de este año
// (no es un empleo inventado, es el tipo de proyecto real que ya se ve
// en la seccion de Proyectos).
export const experiencia = [
  {
    titulo: 'Desarrollador React & Supabase',
    fecha: '2026 - Presente',
    descripcion:
      'Aplicaciones full-stack de principio a fin: interfaces en React, base de datos y autenticación real en Supabase (PostgreSQL + Row Level Security), y despliegue en producción con Vercel y GitHub.',
  },
  {
    titulo: 'Diseñador Digital & Freelancer',
    fecha: '2019 - Presente',
    descripcion: 'Desarrollo independiente de proyectos de diseño gráfico y soluciones digitales.',
  },
  {
    titulo: 'Frontend Developer & UI Designer',
    fecha: '2023 - Presente',
    descripcion: 'Interfaces web modernas con HTML, CSS y JavaScript.',
  },
]
