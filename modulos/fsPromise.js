// Ejemplo de una lectura de archivo trabajandolo con promesas en lugar de callback
// const fs = require('fs').promises
const fs = require('fs/promises')
const carpeta = 'archivo.txt'
const path = __dirname + '/' + carpeta


function leer (ruta){
  const contenido =  fs.readFile(ruta, { encoding: 'utf-8' })
  // console.log(da)
  return contenido
}

leer(path)
  .then((data) => {
    // logica para que al mostrar el contenido aparezca el titulo en la parte superior
    let cad = carpeta + '\n'
    for (let i = 0; i <= carpeta.length; i++) {
      cad += '-'
      if (i === carpeta.length) {
        cad += '\n'
      }
    }
    // fin de logica, se puede obviar y en la parte inferior quitar el valor: cad
    console.log(cad + data)
  })
  .catch((e) => {
    console.log('No se pudo leer, error', e)
  })
