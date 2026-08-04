import { useEffect, useRef } from 'react'

// useCursorGlow mueve un elemento (el "resplandor" que sigue al mouse)
// leyendo directamente la posicion del cursor, sin pasar por el estado
// de React en cada pixel (eso seria muy lento: re-renderizaria toda la
// pantalla en cada mousemove). En vez de eso, tocamos el estilo del
// elemento a mano con una referencia (ref) — el mismo patron que usaba
// el script.js original con document.querySelector.
export function useCursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    // if apaga el efecto en pantallas chicas (celulares), igual que el
    // script original (window.innerWidth > 768).
    if (window.innerWidth <= 768) {
      return
    }

    const mover = (evento) => {
      const nodo = glowRef.current
      if (!nodo) return
      nodo.style.left = `${evento.clientX}px`
      nodo.style.top = `${evento.clientY}px`
    }

    document.addEventListener('mousemove', mover)
    return () => document.removeEventListener('mousemove', mover)
  }, [])

  return glowRef
}
