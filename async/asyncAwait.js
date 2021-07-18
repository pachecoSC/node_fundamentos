function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("hola,", nombre);
      resolve(nombre);
    }, 1000);
  });
}
function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("adios, " + nombre);
      resolve();
    }, 1000);
  });
}
function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("bla bla bla bla...");
      resolve(nombre);
      // reject('se agrego un reject para probar el error');
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Chris");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('fin proceso')
}

console.log('iniciando proceso..')
main()