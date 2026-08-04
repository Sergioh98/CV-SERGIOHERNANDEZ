import { useEffect, useState } from 'react'

// Loader pinta la pantalla de carga (el logo "S" grande) y se desvanece
// solo despues de un momento — igual que el "window.addEventListener load"
// del script.js original, pero adaptado: en React no hace falta esperar
// a que cargue TODA la pagina (imagenes, video, etc.), asi que usamos un
// tiempo fijo corto para que la animacion se sienta igual sin bloquear
// la primera pintura si algun recurso tarda.
function Loader() {
  // visible controla si el loader sigue en pantalla. display:none real
  // (no solo opacity:0) para que no quede un overlay invisible bloqueando
  // clics.
  const [visible, setVisible] = useState(true)
  const [desvaneciendo, setDesvaneciendo] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setDesvaneciendo(true), 700)
    const t2 = setTimeout(() => setVisible(false), 1300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div id="loader" className={desvaneciendo ? 'loader loader--oculto' : 'loader'}>
      <div className="loader__contenido">
        <div className="loader__logo">S</div>
        <p>Cargando perfil...</p>
      </div>
    </div>
  )
}

export default Loader
