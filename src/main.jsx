// main.jsx es el punto de entrada: toma App y lo monta dentro de
// <div id="root"> (definido en index.html). StrictMode ayuda a detectar
// errores comunes durante el desarrollo; no afecta el sitio publicado.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
