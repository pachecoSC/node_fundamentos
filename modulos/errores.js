// ejemplos de como manejar los errores, normal, dentro de otra funcion, funcion asincrona.
function otrafuncion () {
  se_rompe()
}

function se_rompe() {
  const a = 14 + z
  return a
}

function se_rompeAsync(cb) {
  setTimeout(() => {
    try {
      return 14 + z
    } catch (error) {
      console.log('ups, error')
      cb(error)
    }
  })
}

try {
  // se_rompe()
  // otrafuncion()
  se_rompeAsync((error) => {
    console.log(error.message)
  })
} catch (error) {
  console.error('hubo un error:', error.message)
}
