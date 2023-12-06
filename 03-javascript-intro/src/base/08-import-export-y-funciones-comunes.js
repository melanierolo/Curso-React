import { heroes } from './data/heroes';
//import { heroes } from './data/heroes';

// snippet
// imp + tab

console.log(heroes);

// Ejercicio - find
/*const getHeroeById = (id) => {
  return {};
};

console.log(getHeroeById(2));*/

//mi solucion

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroeById(2));

// Solucion 1 - no tan optima
/*
const getHeroeByIdOptimized = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
};
*/

// solucion - optimizada
/*
const getHeroeById = (id) =>  heroes.find((heroe) => heroe.id === id);
*/

//TAREA 2

/* INICIO
const getHeroeByOwner = (owner) => {
  return heroes.find((heroe) => heroe.id === id);
};

*/
// SOLUCION
const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));
