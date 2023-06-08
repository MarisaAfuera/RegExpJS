// Flag u JavaScript utiliza la codificación Unicode, esto determina como se almacenan internamente los caracteres en 
// memoria. Hay que tener en cuenta que Unicode tiene combinaciones de 0s y 1s para representar los caracteres de 
// cualquier lengua, por ejemplo una letra a sería 01000001 en binario o 41 en hexadecimal.
// Para construir patrones para Unicode se usa el metacaracter \p junto con otros caracteres que se ponen entre {}, 
// por ejemplo {Sc} significa symbol y currency (símbolo y moneda)
let patron = /\d+\p{Sc}/gu;
let cadena = `400€`;
console.log( cadena.match(patron) ); // [ '400€' ]