// Metacaracter \t.- Hay coincidencia si encuentra un tabulador horizontal en la cadena. 
// Hay que tener en cuenta que este caracter es un Non Printable Character y los editores 
// normalmente no lo muestran como tal sino que lo interpretan como una orden, en este caso 
// que el caracter siguiente se muestre más a la derecha.

let patr = /[\t]/; 
let cadena = "Este texto no lleva tabulador";
console.log (patr.test(cadena)); // false
cadena = "Este  	texto si lleva tabulador"; // no se ve pero está
console.log (patr.test(cadena)); // true