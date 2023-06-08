// Flag y Busca el patrón en una posición determinada dentro de la cadena.
// Para establecer la posición en la que buscar se usa la propiedad lastIndex de RegExp
let patron = /pepe/y;
patron.lastIndex = 5;
let cadena = `Hola pepe`;
console.log( patron.test(cadena)); // true
cadena = `Adios pepe`;
console.log( patron.test(cadena)); // false