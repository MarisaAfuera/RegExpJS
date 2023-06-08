// Flag i Encuentra coincidencia sin distinguir mayúsculas de minúsculas.
let cadena = "Aquí hay MAYUSCULAS";
console.log(/aquí|mayusculas/.test(cadena));  // false
console.log(/aquí|mayusculas/i.test(cadena));  // true