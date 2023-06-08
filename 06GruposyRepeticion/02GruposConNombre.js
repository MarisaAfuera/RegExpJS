let cadena = "jaja primera vez jaja segunda jaja tercera"; 
console.log (cadena.match(/(?<g1>ja){2} primera vez \k<g1>{2}/g));
console.log ("");
// [ 'jaja primera vez jaja' ]

cadena = "jaja primera vez jaja segunda jaja tercera"; 
console.log (cadena.match(/(?<grupo>ja){2} primera vez \k<grupo>{2}/));
console.log ("");
// [
//     'jaja primera vez jaja',
//     'ja',
//     index: 0,
//     input: 'jaja primera vez jaja segunda jaja tercera',
//     groups: [Object: null prototype] { grupo: 'ja' }
//   ]