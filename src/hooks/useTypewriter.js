import { useEffect, useState } from 'react'

// useTypewriter escribe "texto" letra por letra, como el efecto de la
// version original en vanilla JS (que armaba el string a mano con
// setTimeout). Aqui hacemos lo mismo pero guardando el resultado en un
// estado de React, para que el componente que lo use solo tenga que
// pintar la variable "escrito".
//
// velocidad: ms entre cada letra.
// delayInicial: ms antes de empezar a escribir (deja que el loader se
// vaya primero).
export function useTypewriter(texto, { velocidad = 100, delayInicial = 500 } = {}) {
  const [escrito, setEscrito] = useState('')
  const [terminado, setTerminado] = useState(false)

  useEffect(() => {
    let activo = true
    let i = 0
    let timeoutId

    const escribirLetra = () => {
      if (!activo) return

      if (i < texto.length) {
        setEscrito(texto.slice(0, i + 1))
        i += 1
        timeoutId = setTimeout(escribirLetra, velocidad)
      } else {
        setTerminado(true)
      }
    }

    const arranque = setTimeout(escribirLetra, delayInicial)

    // return limpia los timeouts si el componente se desmonta antes de
    // terminar, para no llamar setEscrito sobre un componente ya fuera.
    return () => {
      activo = false
      clearTimeout(arranque)
      clearTimeout(timeoutId)
    }
    // texto/velocidad/delayInicial no deberian cambiar en la vida de este
    // componente (es un nombre fijo), asi que corre una sola vez.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { escrito, terminado }
}
