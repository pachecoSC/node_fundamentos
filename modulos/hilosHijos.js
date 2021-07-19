const { exec, spawn } = require('child_process')

//dir - listar los archivos
//node modulos/console.js - ejecutar una funcion que esta en el  archivo
// exec('dir',( err, stdout, stderr) => {
//   if (err) {
//     console.error(err)
//     return false
//   }
//   console.log(stdout)
// })

let proceso = spawn('cmd.exe', ['/c','dir']);
proceso.stdout.on('data', function(dato){
    console.log(dato.toString());
})