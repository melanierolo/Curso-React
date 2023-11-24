//ejemplo 1
const person = { name: 'Tony' };
console.log(person.name);

//ejemplo 2
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

// console:
//console.log({ persona: persona });
//console.log({ persona });
//console.table(persona);

//ejemplo 3: asignación de referencia - falso positivo
const personaTwo = persona;
personaTwo.nombre = 'Peter';

console.log(persona);
console.log(personaTwo);

//EJEMPLO 4: operador spread - permite clonar

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
