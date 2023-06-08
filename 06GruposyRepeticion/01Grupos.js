let cadena = "jaja jaja jaja"; 
console.log (cadena.match(/(ja){2}/g));
console.log ("");
// [ 'jaja', 'jaja', 'jaja' ]

cadena = "seis letras seguidas";
console.log (/(\w\w\w){2}/.test(cadena)); // true
console.log (/(\w\w\w){3}/.test(cadena)); // false

