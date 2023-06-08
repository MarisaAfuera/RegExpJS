// Flag m Significa busqueda multilínea. Solo es aplicable a los metacarateres ^ y $ de principio y final de línea.
let cadena = `uno
dos
tres`;
console.log(cadena.match(/^\w+/g));   // [ 'uno' ]
console.log(cadena.match(/^\w+/gm));  // [ 'uno', 'dos', 'tres' ]
console.log(cadena.match(/\w+$/g));   // [ 'tres' ]
console.log(cadena.match(/\w+$/gm));  // [ 'uno', 'dos', 'tres' ]

