import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuracion de Vite: solo necesitamos el plugin de React para JSX + HMR.
// base: './' hace que el build funcione tanto en la raiz de un dominio
// (Vercel) como en un subpath de GitHub Pages (usuario.github.io/repo/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
