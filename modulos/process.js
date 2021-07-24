//ya no es necesario viene con node
// const process = require('process')

process.on('beforeExit', () => {
  console.log('el proceso va a terminar')
})

process.on('exit', () => {
  // en este punto solo se pueden ejecutar funciones sincronas en el hilo principal, si existes alguna funcion asincrona esta no se va a ejecutar.
  console.log('el proceso acabo')
})

console.log('antes de los errores')

process.on('uncaughtException', (error, origen) => {
  console.error('Ups, Error:', error.message)
  console.error('El origen:', origen)
})

funcionQuenoExiste()

console.log('despues de error')
