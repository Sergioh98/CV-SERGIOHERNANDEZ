// TituloSeccion reproduce el efecto del script.js original: cada h2 se
// parte en palabras y cada palabra en letras, y cada letra tiene su
// propio animation-delay en CSS (la animacion "aparecerLetra" vive en
// index.css). El resultado es el mismo efecto de "letras cayendo en
// cascada" del sitio original, pero calculado por React en vez de
// manipular el DOM a mano con innerHTML.
function TituloSeccion({ icono, texto }) {
  const palabras = texto.split(' ')

  return (
    <h2>
      {icono && <i className={icono} aria-hidden="true" />}
      {icono && ' '}
      {palabras.map((palabra, indicePalabra) => (
        <span className="word-wrapper" key={`${palabra}-${indicePalabra}`}>
          {palabra.split('').map((letra, indiceLetra) => (
            <span
              className="char"
              key={`${letra}-${indiceLetra}`}
              style={{ animationDelay: `${indicePalabra * 100 + indiceLetra * 30}ms` }}
            >
              {letra}
            </span>
          ))}
        </span>
      ))}
    </h2>
  )
}

export default TituloSeccion
