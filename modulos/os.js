const os = require('os')

// console.log(os.arch())
// Function to convert from bytes to kbytes, mbytes and gbytes
const SIZE = 1024

kb = (bytes) => {
  return bytes / SIZE
}
mb = (bytes) => {
  return kb(bytes) / SIZE
}
gb = (bytes) => {
  return mb(bytes) / SIZE
}

const tabla = [
  {
    Arquitectura: os.arch(),
    Plataforma: os.platform(),
    'RAM(GB)': gb(os.totalmem),
    'RAM disponible(GB)': gb(os.freemem)
  }
]
console.table(tabla)

const t_dir = [{ 'Directorio-home': os.homedir(), Temporal: os.tmpdir(), Hosting: os.hostname() }]
console.table(t_dir)

// console.table(os.networkInterfaces()['Wi-Fi'])
// console.table(os.networkInterfaces()['Loopback Pseudo-Interface 1'])

console.table(os.cpus())
console.log('tiempos de los procesadores',os.cpus().length)

for (let i = 0; i < os.cpus().length; i++) {
  // const element = array[i];
  console.log('*Procesador ', i)
  console.table(os.cpus()[i].times)

}
// console.log(os.cpus().tabla)

console.log(os.networkInterfaces())
