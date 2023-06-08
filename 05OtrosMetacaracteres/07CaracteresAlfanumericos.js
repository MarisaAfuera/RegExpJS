// Metacaracter \w: Busca caracteres alfanuméricos del alfabeto latino. Equivalente a [A-Za-z0-9_]
console.log (/\w/.test('123abc')) // true
console.log (/\w/.test('áéíóú')) // false

// Metacaracter \W: Busca caracteres no alfanuméricos. Equivalente a [^A-Za-z0-9_]
console.log (/\W/.test('123abc')) // false
console.log (/\W/.test('áéíóú')) // true