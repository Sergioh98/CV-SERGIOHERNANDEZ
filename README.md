# CV Sergio Hernandez — Vite + React

Reescritura del CV original (`CV-SERGIOHERNANDEZ`, HTML/CSS/JS puro) en **Vite + React**,
manteniendo la misma estética (fondo navy con grilla animada, glassmorphism, glow que sigue
al cursor, typewriter en el nombre, títulos con animación letra por letra), pero con el
perfil rediseñado como una **tarjeta de red social**: portada, avatar circular, insignia de
verificado, métricas tipo "posts / seguidores", y cada proyecto se muestra como una
publicación con capturas, tecnologías como hashtags y botones directos a "Ver código" / "Ver demo".

React aparece primero y destacado (insignia "★ Principal") en la sección Tech Stack y en
las tecnologías de los dos proyectos grandes.

## Cómo correrlo

```bash
npm install
npm run dev
```

Y para generar el build de producción:

```bash
npm run build
```

## Assets que faltan copiar a mano

Este proyecto se generó sin acceso de red a GitHub, así que **dos archivos binarios no se
pudieron traer automáticamente** del repo original `CV-SERGIOHERNANDEZ`. Cópialos a la
carpeta `public/` (con esos nombres exactos) para que se vean:

- `public/sergio.mp4` — el video de perfil (si no está, el avatar cae a un círculo con las
  iniciales "SH", sin romper la página).
- `public/cv.pdf` — el PDF del CV que descarga el botón "Descargar CV en PDF".

## Proyectos enlazados

| Proyecto | Código | Demo |
|---|---|---|
| Serix Chat | github.com/Sergioh98/serix-chat | serix-chat-ashy.vercel.app |
| SERIX Credito | *(repo privado)* | serix-credito-admin-web.vercel.app |
| Caracol Marino | github.com/Sergioh98/caracolmarino | — |
| Paslucho | github.com/Sergioh98/paslucho | — |
| Automatizaciones Consultorios | github.com/Sergioh98/AUTOMATIZACIONES-CONSULTORIOS | — |

**Nota:** el repo de `serix-credito` está marcado como privado en GitHub — un reclutador que
haga clic en su link no va a poder ver el código a menos que lo hagas público o lo invites
como colaborador. Si quieres, puedo ayudarte a hacerlo público (o a valorar si conviene,
dado que es un proyecto de gestión de créditos).
