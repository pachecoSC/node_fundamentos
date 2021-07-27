// algunas librerias necesitan ; al final de require para funcionar correctamente
const puppeteer = require('puppeteer');
//ejemplo de funcion autoejecutada.
// ( () => {
//     //nuestro codigo
// } )()

(async () => {
  console.log('lanzamiento navegador')
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()
  await page.goto('https://es.wikipedia.org/wiki/Node.js')

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1')
    console.log('el titulo', h1.innerHTML)
    return h1.innerHTML
  })

  var content1 = await page.evaluate(() => {
    const p = document.querySelector('p')
    return p.innerHTML
  })

  var subtitulos = await page.evaluate(() => {
    const h2 = document.querySelector('h2')
    return h2.innerText
  })

  console.log(titulo1)
  console.log(content1)
  console.log(subtitulos)

  console.log('cerrando navegador')
  browser.close()
  console.log('navegador cerrado')
})()
