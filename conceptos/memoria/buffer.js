// let buffer = Buffer.alloc(4) //esta separando memoria
//tambien podemos declarar y asignar al mismo tiempo
// let buffer = Buffer.from([1, 2, 5, 10])
let buffer = Buffer.from('hola')
// nota: los valores se guardan en hexagesimal

console.log(buffer) //devuelve valores en bits
console.log(buffer.toString()) // devuelve valores en cadena

//abecedario ingles consta de 26 letras (no tiene ñ)
let abc = Buffer.alloc(26) // separamos la memoria de 26 espacios

for (let i = 0; i < 26; i++) {
  abc[i] = i+97 // (97 + 0) corresponde a la letra a minuscula.. alt+97
}

console.log(abc.toString()) // lo imprimimos. antes lo convertimos a cadena