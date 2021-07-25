const moment = require('moment')

// console.log(moment)
moment.locale('es-us') //definimos la region de moment.
//'es-us' español
//'en' ingles
console.log('region actual:',moment.locale())
console.log('todos los meses:', moment.months()) //todos los meses en ingles
console.log('Horario UTC:', moment().utc().toString())
console.log('Zona Horaria Actual:',moment.parseZone().toString())
console.log('estamos en la semana:', moment().week().toString())
console.log('este año es:',moment().year().toString())

console.log('formato actual:',moment().format())
const fecha = moment().format('YYYY/MM/DD - HH:mm') // la fecha con el formato que elijas

console.log('nuevo formato:',fecha.toString())
