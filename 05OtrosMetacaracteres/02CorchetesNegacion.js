// Metacaracter ^ dentro de corchetes. [^abc] Encuentra coincidencia si encuentra algún caracter 
// distinto de los que aparecen entre corchetes en la cadena. También se pueden especificar 
// rangos de caracteres mediante un guión, así [^abc] es lo mismo que [^a-c]

let patr = /[^r-z]/; // esto es lo mismo que /[^rstuvwxyz]/
let cadena = "Aqui hay letras que no estan entre la r y la z";
console.log (patr.test(cadena)); // true
cadena = "tururu";
console.log (patr.test(cadena)); // false