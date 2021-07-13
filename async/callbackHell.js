function hola (nombre, callback) {
  setTimeout(function () {
    console.log('hola,', nombre)
    callback(nombre)
  }, 1000)
}
function adios (nombre,callback) {
  setTimeout(function () {
    console.log('adios, '+ nombre)
    callback()
  }, 1000)
}
function hablar ( callback) {
  setTimeout(function () {
    console.log('bla bla bla bla...')
    callback()
  })
}

function conversacion (nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback)
    })
  } else {
    callback(nombre, function () {
      console.log('fin proceso...')
    })
  }
}

// es la funcion que se ejecuta al momento de usar el nodemon async/callbackHell.js
console.log('iniciando proceso...')
hola('chris', function (nombre) {
  conversacion(nombre, 3, adios)
})