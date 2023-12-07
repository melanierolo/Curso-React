/*
EXPORTACION DEFECTO

OPCIÓN 1:
heroes.js-----------------

export default [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];

OPCIÓN 2: RECOMENDADA
Que vayan al final del archivo
heroes.js-----------------
const heroes = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];

export default heroes;

*/

/*
IMPORTACIÓN POR DEFECTO:
index.js-----------
import heroes, { owners } from './data/heroes';

console.log('export default :', heroes);

IMPORTACIÓN POR DEFECTO + IMPORTACIÓN INDIVIDUAL:
import heroes, { owners } from './data/heroes';

console.log(' default :', heroes);
console.log(' individual :', owners);

*/

/*
EJEMPLO 3: Muchas personas prefieren esta forma
heroes.js--------------
export { heroes, owners };

index.js--------------
import { heroes, owners } from './data/heroes';


EJEMPLO 4: con un solo export

index.js--------------
import heroes, { owners } from './data/heroes';


heroes.js--------------
export {heroes as default, owners}

*/

/* FAVORITO
heroes.js--------------
export const owners = ['DC', 'Marvel'];

export default heroes;

index.js--------------
import  heroes, { owners } from './data/heroes';


*/

import heroes, { owners } from './data/heroes';

console.log(' default :', heroes);
console.log('individual :', owners);
