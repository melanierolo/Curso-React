//14 - variable and constants
//NOTE: you don't use var
const personName = 'Melanie';
const personLastname = 'Rodas';

// Ejemplo 2: Modificación de una variable con 'let'
let valorDado = 5;
valorDado = 4;

console.log(personName, personLastname, valorDado);
// Ejemplo 3: scope
if (true) {
  // 'valorDado' dentro de este ámbito (scope) es independiente del anterior
  let valorDado = 6;

  console.log(valorDado); // 6
}

console.log(valorDado); // 4

//example 4_scope:
if (true) {
  // 'personName' dentro de este ámbito (scope) es independiente del anterior
  const personName = 'Peter';

  console.log(personName); // Peter
}

console.log(personName); // Melanie
