// Flag s Es aplicable al metacaracter .. Cuando se usa el flag s el . encuentra coincidencia con salto de línea \n.
let cadena = `uno
dos
tres`;
console.log(/uno./.test(cadena));   // false
console.log(/uno./s.test(cadena));  // true

