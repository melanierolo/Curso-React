/*17-Arreglos en JS*/

// example 1-1: new Array no se recomienda
const arregloOne = new Array();

console.log(arregloOne);

// example 1-2:new Array no se recomienda
const arregloTwo = new Array(100); // solo para tamaño predefinido al inicio
arregloTwo.push(1);
console.log(arregloTwo);

// example 2-1: (arreglo con push, el cual no es recomendable porque modifica el objeto principal)

const arregloThree = [];
arregloThree.push(1);
arregloThree.push(2);
arregloThree.push(3);
arregloThree.push(4);

console.log(arregloThree);

// example 2-2: operador spread

const arregloTwoOne = [1, 2, 3, 4];

let arregloTwoTwo = [arregloTwoOne, 5];

console.log(arregloTwoOne);
console.log(arregloTwoTwo);
/*
El operador spread es esencial para clonar arreglos, ya que extrae los elementos 
de uno existente para crear una nueva estructura, posibilitando la manipulación 
de datos de manera eficiente.
*/

// example 3-1: MAP CON ERROR

const arregloUno = [1, 2, 3, 4];

let arregloDos = [...arregloUno, 5];

//const arregloTres = arregloDos.map();

console.log(arregloUno);
console.log(arregloDos);
//console.log(arregloTres);

//example 3.2: método map - crea un nuevo array
const arreglo1 = [1, 2, 3, 4];

let arreglo2 = [...arreglo1, 5];

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);

/*Si deseamos multiplicar cada uno de sus elementos por 2, 
podemos emplear el método 'map'. Dentro de este método, 
definiremos una función de callback que se ejecutará por 
cada elemento del arreglo2. Esta función recibirá un 
argumento llamado 'número', el cual representará 
individualmente cada valor dentro del ciclo de ejecución.  */
