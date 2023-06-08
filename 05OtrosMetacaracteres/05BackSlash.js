// Metacaracter ➝ \
// Tiene dos usos distintos. Uno cuando se usa delante de algunos caracteres cambia su significado
// en el patrón, por ejemplo /t/ busca una letra t y /\t/ busca un tabulador. El segundo uso es 
// para quitar el significado especial a algunos caracteres dentro del patrón, por ejemplo /a*/ 
// busca una a seguida de 0 o más aes, sin embargo /a\*/ busca una a seguida de un asterisco.
let patr = /a*/; 
let cadena = "Hola";
console.log (patr.test(cadena)); // true
patr = /a\*/;
console.log (patr.test(cadena)); // false
cadena = "hola*"
console.log (patr.test(cadena)); // true