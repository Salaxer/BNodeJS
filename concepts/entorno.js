
let nombre = process.env.NOMBRE || 'user';
let web = process.env.WEB || 'esta en desarrollo';

// Una buena practica es decrarar las variables de entorno es ponerlas en MAYUSCULAS y cuando quieramos
// Colocar dos palabras, separarlas por un guion MY_CAPITAL_LETTER

console.log(`Hola ${nombre}`);
console.log(`Mi web es: ${web}`);
console.log('Hola');

// Para crear variables de entorno lo que se necesita es definirlas primero.
// Para eso lo que debemos de hacer es colocar la variable que quieres consultar
// Ejemplo: NOMBRE=salaxer. antes del script a ejecutar.+

// Para recivir estas variables lo que debemos de hacer es colocar process.env
// enviroment i think


// Nodemon (Desarrollo): Es un gestor que nos ayuda a detectar los cambios, compilarlo y ejecutarlos.
// npm install -g nodemon

// PM2 (Producción): Es parecida a nodemon simplemente mas avanzada y mas compleja. 
// No se debe utilizar en desarrollo por que dará más problemas que soluciones. 
// Nos ayudara a ver los datos de nuestra aplicación en producción, como el uso del CPU, memoria, cuantas veces se ha reiniciado.