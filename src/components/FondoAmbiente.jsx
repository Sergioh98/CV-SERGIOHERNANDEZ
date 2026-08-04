import { useCursorGlow } from '../hooks/useCursorGlow'

// FondoAmbiente agrupa las dos capas decorativas que van detras de todo
// el contenido: la grilla tecnologica animada y el resplandor que sigue
// al cursor. Viven juntas porque las dos son puramente visuales, sin
// datos ni logica propia.
function FondoAmbiente() {
  const glowRef = useCursorGlow()

  return (
    <>
      <div className="tech-grid" aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  )
}

export default FondoAmbiente
