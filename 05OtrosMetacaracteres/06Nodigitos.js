// Metacaracter \D: Busca que haya algún no dígito en la cadena. Equivalente a [^0-9]
console.log (/\D/.test('123abc')) // true
console.log (/\D/.test('123')) // false