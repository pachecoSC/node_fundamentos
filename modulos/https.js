const http = require('http')
const url = require('url')

const host = 'localhost'
const port = 3000

function router(req, res) {
  // console.log('nueva peticion')
  const parsedUrl = url.parse(req.url, true)
  // console.log(parsedUrl.query.nombre)
  const path = parsedUrl.pathname
  switch (path) {
    case '/hola':
      res.writeHead(201, { 'Content-Type': 'text/plain', 'Content-Test': 'Cabecera de chris' })
      res.write('hola mundo, peticiones por rutas')
      res.end()
      break
    case '/':
      res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' })
      let hora = new Date().toString()
      let nombre = parsedUrl.query.nombre !== undefined ? parsedUrl.query.nombre : 'NN'
      res.write(`hola ${nombre} son las:\n ${hora}`)
      res.end()
      break
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.write('404 - not fount')
      res.end()
      break
  }
}

const server = http.createServer(router)

//ejecutando el servidor y le enviamos como parametros el puerto donde escuchamos(3000), opcional enviamos el hosting donde estan trabajando( localhost), y una funcion opcional para saber si esta funcionando todo correctamente
server.listen(port, host, (err) => {
  err
    ? console.error('fallo la conexion', err.message)
    : console.info('Listo en http://' + host + '/' + port)
})

// forma principal - de esta manera se inicio.
/* http.createServer(function (req, res) {
  console.log('nueva peticion')
  console.log(req.url)

  //escribir cabeceras
  res.writeHead(201,{'Content-Type':'text/plain'})
  // escribir peticiones
  res.write('Hola escrito en https js')
  res.end()
}).listen(3000)

console.log('escuchando en el puerto 3000') */
