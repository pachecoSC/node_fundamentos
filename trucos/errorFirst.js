function asincro(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z
      callback(null, a)
    } catch (e) {
      callback(e)
    }
  }, 1000)
}

// try {
  asincro((err, dato) => {
    if (err) {
      console.error('Ups! ', err.message)
      return false
      // throw err  //solo funciona con funciones sincronos con las asincronas no funciona.
    } else {
      console.log('Data:', dato)
    }
  })
// } catch (error) {
//   console.error('Capturado:', error)
// }

