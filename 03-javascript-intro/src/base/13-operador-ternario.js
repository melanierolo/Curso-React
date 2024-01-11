// Ejemplo 1:
let activo = true;
let mensajeUno = '';

if (activo) {
  mensajeUno = 'Activo';
} else {
  mensajeUno = 'Inactivo';
}

console.log(mensajeUno);

// Ejemplo 2:
// const mensajeDos = (activo === true) ? 'activo' : 'inactivo';
const mensajeDos = activo ? 'activo' : 'inactivo';

console.log(mensajeDos);

// Ejemplo 3-1:
activo = true;
// const mensajeTres =  (activo) ? 'Activo' : null;

// Declaración de "mensajeTres" usando el operador && (AND lógico).
const mensajeTres = activo && 'Activo';

console.log('mensajeTres', mensajeTres);

// Ejemplo 3-2:
activo = true;
const mensajeTresNegado = !activo && 'Activo';

// Imprime en consola el valor de "mensajeTresNegado".
console.log('mensajeTresNegado', mensajeTresNegado); // false

/* --------------------------------------------------------------------*/
// Ejemplo 4-1:
// Si "activo" es true, devuelve 1. Si es false, no se ejecuta la parte restante.
activo = true;
const resultadoUno = activo && 1;

// Imprime en consola el resultado.
console.log('true && 1', resultadoUno); // Salida: 1

// Ejemplo 4-2:
//  true, devuelve el mensaje. Si es false, no se ejecuta la parte restante.
const resultadoDos = true && 'Hola mundo!';

// Imprime en consola el resultado.
console.log("true && 'Hola mundo!", resultadoDos); // Salida: 'Hola mundo!'

// Ejemplo 4-3:
// Si "activo" es false, no se ejecuta la parte restante.
activo = true;
const resultadoCuatro = !activo && 'Hola mundo!';

// Imprime en consola el resultado.
console.log(resultadoCuatro); // Salida: false
