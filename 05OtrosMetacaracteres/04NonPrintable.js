// Metacaracteres ➝ \r \n \v \f
// Buscan Non Printable Characteres y los editores normalmente no los muestran como tal
// sino que lo interpretan como una orden. Cada uno tiene un significado distinto: 
// \r carriage return (junto a \n salto de línea), \n linefeed (salto de línea), 
// \v vertical tab y \f form-feed (salto de página).

let patr = /\n/; 
let cadena = `Este texto termina line feed
   `;
console.log (patr.test(cadena)); // true