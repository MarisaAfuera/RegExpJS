// Objeto String: El método match() realiza una búsqueda para encontrar el patrón dentro de una cadena de 
// caracteres y devuelve un array con los resultados. Sino hay coincidencias devuelve null.
let patr = /capítulo \d/g;
let cadena = "capítulo 1";
console.log("Primer ejemplo con flag g");
console.log("Match 01 ",cadena.match(patr)); // [ 'capítulo 1' ]
cadena = "capítulo 1 y capítulo 2";
console.log("Match 02 ", cadena.match(patr)); // [ 'capítulo 1', 'capítulo 2' ]
console.log("");
//
// Objeto String: el método match devuelve un array con la primera coincidencia encontrada. Con el flag "g"
// devuelve todas las coincidencias
patr = /(?<g1>casa)/; // /(?<g1>casa)/ /casa/
cadena = "Una casa, dos casas, tres casas";
console.log("Segundo ejemplo sin flag g");
console.log("El resultado es: ", cadena.match(patr));
console.log("");
// El resultado es:  ['casa', index: 4, input: 'Una casa, dos casas, tres casas', groups: undefined]

// Objeto String: el metodo matchAll debe llevar la bandera g y devuelve un iterador que contiene las coincidencias 
// del patrón encontradas en la cadena.
patr = /capítulo \d/g;
cadena = "capítulo 1 y capítulo 2";
iterador = cadena.matchAll(patr);
console.log("Tercer ejemplo con matchAll");
console.log(iterador.next().value); // ['capitulo 1', index: 0, input: 'capítulo 1 y capítulo 2', groups: undefined]
console.log(iterador.next().value); // ['capítulo 2', index: 13, input: 'capítulo 1 y capítulo 2', groups: undefined]
console.log(iterador.next().done); // true