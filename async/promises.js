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

console.log("inicio proceso..");
hola("Chris")
  .then(hablar)
  .then(hablar) // nota si en una funcion intermedia no resuelve con parametro estos se pierden
  .then(hablar)
  .then(adios) // si antes de esta funcion se pierde el parametro a esta funcion se iria vacia.
  .then(() => {
    console.log("termino proceso");
  })
  .catch((e) => {
    console.log("Ups!", e);
  });
