# node_fundamentos

curso para aprender sobre los fundamentos de node js

comando para ejecutar los archivos

> nodemon #nombre_de_archivo

para obtener los node_modules es necesario el siguiente comando

> npm install

desde la ruta en la que se encuentra el package.json en este caso la ruta es

> cd paquetes/npm/

---

se agrego una carpeta util a los paquete. contiene un package.json con dependencias.
primero ingresar a la carpeta y luego ejecutar install

> cd paquetes/utiles
> npm install

esta carpeta contiene modulos que siempre son utiles
bcrypt -> para encriptar contraseñas

> npm i bcrypt

moment -> para trabajar con fechas

> npm i moment

sharp -> para manejar las imagenes

> npm i sharp

---

se agrego herramienta para hacer web scrapping

> npm i puppeteer

se agrego una herramienta llamada gulp para automatizar tareas y un servidor

> npm i gulp gulp-server-livereload

se agrego una herramienta llamada electron para pasar webs a app de escritorio.

> npm i electron
