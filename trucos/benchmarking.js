// prueba de rendimiento, cuanto demora en realizar una funcion o codigo.
console.time('Todo')
let suma = 0
let suma2 = 0

console.time('bucle')
for (let i = 0; i < 100000000; i++) {
  suma += i
}
console.timeEnd('bucle')

console.time('bucle-2')
for (let j = 0; j < 100000000; j++) {
  suma2 += j
}
console.timeEnd('bucle-2')

console.time('Asyncro')
console.log('empieza proceso asincrono')
asincro().then(() => {
  console.timeEnd('Asyncro')
})

function asincro() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('termina funcion asincrona')
      resolve()
    })
  })
}

console.timeEnd('Todo')
