// Objeto String: Reemplaza las coincidencias del patrón con la cadena especificada. El método replace tiene dos 
// argumentos, el primero para especificar la cadena o patrón a reemplazar y el segundo para especificar conqué 
// hay que reemplazarlo.
cadena = "10-30-00";
console.log("Ejemplo 1");
console.log(cadena.replace(/-/g, ":")); // 10:30:00
console.log("");
cadena = "James Bond";
console.log("Ejemplo 2");
console.log(cadena.replace(/(James) (Bond)/, 'Me llamo $2, $1 $2')) // Me llamo Bond, James Bond
