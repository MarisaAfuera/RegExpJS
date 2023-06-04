let patron = /cba/;
let cadena = "abcdefghijk";
console.log('sencillo', patron.test(cadena)) // false

patron = /a.a/;
cadena = "ala"; 
console.log("metacaracter 1", patron.test(cadena)); // true
cadena = "asa"; 
console.log("metacaracter 2", patron.test(cadena)); // true
cadena = "abc";
console.log("metacaracter 3", patron.test(cadena)); // false
