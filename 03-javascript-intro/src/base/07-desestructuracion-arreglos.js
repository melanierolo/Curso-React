// ------ Ejemplo 1: Forma tradicional
const personajesInit = ['Goku', 'Vegeta', 'Trunks'];

// Mostrar el primer personaje
console.log(personajesInit[0]);

// Mostrar Vegeta y Trunks como mensajes de consola independientes
console.log(personajesInit[1]);
console.log(personajesInit[2]);

// ------ Ejemplo 2: : la desestructuración de un arreglo
const personajesOne = ['Goku', 'Vegeta', 'Trunks'];

const [goku] = personajesOne;
console.log(goku);

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [p1] = personajes;
console.log(p1);

// ------ Ejemplo 3: Desestructuración con espacios vacíos - poco frecuente

const personajesTres = ['Goku', 'Vegeta', 'Trunks'];

const [, p2] = personajesTres; // Ignora el primer elemento, obtiene el segundo (Vegeta)
console.log(p2); // Imprime 'Vegeta'

const [, , p3] = personajesTres; // Ignora el primer y segundo elemento, obtiene el tercero (Trunks)
console.log(p3); // Imprime 'Trunks'

//------ Ejemplo 4: : Desestructuración directamente
const retornaArreglo = () => {
  return ['ABC', 123];
};

const arr = retornaArreglo();
console.log(arr); // Salida esperada: ["ABC", 123]

// Separar las letras y números
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros); // Resultado: ABC 123

// ----- TAREA
const usesState = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola mundo');
    },
  ];
};

const arrOne = usesState('Goku');
console.log(arr);

// Para llamar la función, podríamos hacerlo así:
arrOne[1](); // Llamamos a la función dentro del arreglo en la segunda posición con los paréntesis

/*
1.	El primer valor del arreglo se llamará 'nombre'.
2.	El segundo valor del arreglo se llamará 'setNombre'. Aunque, 
en realidad, no realizará ninguna acción con él, simplemente 
le asignamos este nombre.
Su tarea es realizar la desestructuración de este arreglo directamente aquí. 
Luego, impriman el 'nombre' en la consola y después llamen a 'setNombre' de esta manera.

*/

// SOLUCIÓN
const [nombre, setsNombre] = usesState('Vegeta');

console.log('nombre:', nombre, 'setsNombre:', setsNombre);
