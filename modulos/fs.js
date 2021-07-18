const fs = require('fs')
// import fs from 'fs'

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    // console.log(data.toString())
    data !== undefined ? cb(data.toString()) : cb(err.toString())
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      cb('no se pudo realizar:', err)
    } else {
      cb('se creo de manera existosa')
    }
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb)
}

function Existencia(ruta, cb) {
  fs.access(ruta, fs.constants.F_OK, (err) => {
    err ? cb('does not exist') : cb('exists')
  })
}
/*  nota access nos muestra las opciones de acceso que se tiene
 * fs.constants.
 * Existesncia ( F_OK )
 * Lectura ( R_OK )
 * Escritura( W_OK )
 */
function Copia(ruta, destino, cb) {
  fs.copyFile(ruta, destino, fs.constants.COPYFILE_EXCL, (err) => {
    err ? cb('sucedio un error', err) : cb('se realizo la copia de manera exitosa')
  })
}

// ejecucion de funciones
leer(__dirname + '/archivo.txt', console.log)
// escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log)
// borrar(__dirname + '/copia.txt', console.log)
// Existencia(__dirname + '/archivo2.txt', console.log)
//  Copia(__dirname+'/archivo.txt',__dirname+'/copia.txt',console.log)
// console.log(fs)
