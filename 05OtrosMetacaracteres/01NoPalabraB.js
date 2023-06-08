// Metacaracter \B.- Comprueba límites de no palabra. Un límite de no palabra es la posición donde 
// un caracter de palabra es seguido o precedido por otro caracter de palabra. Los caracteres de 
// palabra son: letras del alfabeto latino en mayúsculas o minúsculas, números arábigos o sea los 
// caracteres del 0 al 9 y el caracter de subrayado. 
// Es decir busca que un caracter esté seguido o precedido por otro del mismo tipo, de palabra o 
// de no palabra.

let patr = /\B-\B/;
let cadena = "Guión - entre espacios";
console.log (patr.test(cadena)); // true
cadena = "Guión-entre espacios";
console.log (patr.test(cadena)); // false