const sharp = require('sharp')

const width = 100
const height = 100
const option = 'contain'
//cover: se recorta para cubrira las dimensiones ( centro)
//contain: incrustar dentro de las dimensiones proporcionadas
//fill: ignora la relacion de aspecto y estira la imagen para entrar en las dimensiones
//inside: conserva la rlacion de aspecto. estira la imagen asegurese el origen sea igual o mas pequeña de lo que pretende ser el destino
//outside: conserva la relacion de aspecto. comprime la imagen asegurese el origen sea igual o mas grande de lo que pretende ser el destino
const path= './assets'

sharp(`${path}/logojs.png`)
  .resize(width, height, option)
  // .grayscale()
  .toFile(`${path}/resize${width}x${height}.png`)
  .then((data) => {
    console.log('success',data)
  })
  .catch((err) => {
    console.error('Ups',err.message);
  })