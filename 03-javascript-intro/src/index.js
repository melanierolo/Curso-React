console.log('Hola Mundo!!!');

//14 - variable and constants
//NOTE: you don't use var
const personName = 'Melanie';
const personLastname = 'Rodas';

// example 2
let valorDado = 5;
valorDado = 4;

console.log(personName, personLastname, valorDado);
// Example 3: scope
if (true) {
  let valorDado = 6;

  console.log(valorDado); // 6
}

console.log(valorDado); // 4

//example 4_scope:
if (true) {
  let personName = 'Peter';

  console.log(personName);
}

console.log(personName);
