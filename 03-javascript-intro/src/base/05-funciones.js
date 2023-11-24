// 18 - Funciones en JS

// Ejemplo 1-1: función declarativa
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

console.log(saludar('Goku'));

// Ejemplo 1-2: función declarativa – retorno la referencia a la función
function saludarOne(nombre) {
  return `Hola, retorno la referencia a la funcinon ${nombre}`;
}

console.log(saludarOne);

// Ejemplo 1-3: función declarativa – ya no es la referencia a la función
function saludarTwo(nombre) {
  return `Hola, retorno la referencia a la funcinon ${nombre}`;
}

saludarTwo = 30;

console.log(saludarTwo);

// Las funciones anteriores no son recomendables, ya que es propenso a errores

// forma recomendable
// Ejemplo 1-4:
/*const saludarFour = function (nombre) {
  return `Hola, ${nombre}`;
};

saludarFour = 20;

console.log(saludarFour);*/
// Genera un error en el que saludarFour a sido asignado como cont
// -------------------------------------------------------------------------

//Ejemplo 2-1: Función flecha
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};
console.log(saludar2('Vegeta'));

//Ejemplo 2-1: Función flecha en una sola línea(compacta)
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar3('Goku'));
console.log(saludar4());

// Ejemplo 3: función que retorna un objeto
const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'El_Papi1502',
  };
};

console.log(getUser());
// Ejemplo 3: función que retorna un objeto - error

/*const getUserTwo = () => {
  uid: 'ABC123',
  username: 'El_Papi1502',
};

console.log(getUserTwo());*/

// Ejemplo 4: función que retorna un objeto - forma correcta con paréntesis sin la palabra return

const getUserThree = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502',
});

console.log(getUserThree());

// Tarea
/*
a.Transformen una función existente a una función de flecha.
b.Debe retornar un objeto de manera implícita.
c.Asegúrense de probarlo para confirmar su funcionamiento.

*/
function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC567',
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

//SOLUTION
const getUsuarioActivoSol = (nombre) => ({
  uid: 'ABC567',
  username: nombre,
});

const usuarioActivoSol = getUsuarioActivoSol('Fernando');
console.log(usuarioActivoSol);
