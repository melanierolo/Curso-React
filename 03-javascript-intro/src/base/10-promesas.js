import { getHeroeById } from './base/08-import-export-y-funciones-comunes.js';
import { heroes } from './data/heroes.js';

// PROMESA 1
//Promesa sin usar resolve y reject
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2 segundos después 1');
  }, 2000);
});

// promesa 2:
// En este caso en ningún momento obtenemos el then de la promesa, porque en ningún momento llamamos el resolve o reject
const promesaDos = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2 segundos después 2');
  }, 2000);
});
promesaDos.then(() => {
  console.log('Then de la promesa 2');
});

// PROMESA 3:

//Usando la resolve en la promesa
const promesaTres = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});
// consumiendo la promesa
promesaTres.then(() => {
  console.log('Then de la promesa 3');
});

// TAREA: importar getHeroeById
const promesaTarea = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    console.log('heroe en la promesa:', heroe);
    resolve(heroe);
  }, 2000);
});
// consumiendo la promesa
promesaTarea.then((response) => {
  console.log('Then de la promesa TAREA:', response);
});

// CASO DE ERRORES
const promesaTareaB = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    console.log('heroe en la promesa:', heroe);
    reject('No se pudo encontrar al héroe');
  }, 2000);
});
// consumiendo la promesa
promesaTareaB
  .then((response) => {
    console.log('Then de la promesa TAREA:', response);
  })
  .catch((err) => {
    console.log(err);
  });

//Creación de una Promesa y Uso de Función Asíncrona para Obtener un Héroe

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    // Lógica para encontrar el héroe por ID
    const heroe = heroes.find((heroe) => heroe.id === id);

    // Manejo del resultado: Resolve para éxito y Reject para error
    if (heroe) {
      resolve(heroe); // Resuelve la promesa con el héroe encontrado
    } else {
      reject('No se pudo encontrar el héroe'); // Rechaza la promesa si no se encuentra el héroe
    }
  });
};

// Uso de 'getHeroeByIdAsync' con métodos then y catch
getHeroeByIdAsync(4)
  .then((heroe) => {
    console.log('Uso de Función Asíncrona para Obtener un Héroe');
    console.log(heroe);
  })
  .catch((error) => {
    console.log('Uso de Función Asíncrona para Obtener un Héroe');
    console.warn('Error:', error);
  });

// Uso de 'getHeroeByIdAsync' con otro ID
getHeroeByIdAsync(10)
  .then((heroe) => {
    console.log('Uso de Función Asíncrona para Obtener un Héroe');
    console.log(heroe);
  })
  .catch((error) => {
    console.log('Uso de Función Asíncrona para Obtener un Héroe');
    console.warn('Error:', error);
  });
