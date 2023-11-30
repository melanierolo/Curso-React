// 19 - Desestructuración de objetos

// ---- ---------------------------- Ejemplo 1: Sin desestructuración ----------------------------
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// ---- ---------------------------- Ejemplo 2: Asignación  desestructurante ----------------------------

const personaDos = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

// Extrayendo la propiedad 'nombre' de 'personaDos'
const { nombre } = personaDos;
console.log(nombre); // Resultado: 'Tony'

// Renombrando la variable 'nombre' a 'nombre2'
const { nombre: nombre2 } = personaDos;
console.log(nombre2); // Resultado: 'Tony'

// Extrayendo 'edad' y 'clave' de 'personaDos'
const { edad, clave } = personaDos;
console.log(edad, clave); // Resultado: 45 'Ironman'

// -------Ejemplo 3:----------------------------
const retornaPersona = (usuario) => {
  // Imprime en consola el usuario (persona)
  console.log(usuario);
};

// Llamada a la función con el objeto 'persona'
retornaPersona(persona); // Cambiar 'persona' por el nombre del objeto que corresponda

// Aquí se imprimirá en consola: { nombre: 'Tony', edad: 45, clave: 'Ironman' }

// ----------------------------  Ejemplo 4:Desestructuración  ----------------------------

const retornaPersonaDos = (usuario) => {
  const { edad, clave, nombre } = usuario;

  console.log(edad, clave, nombre);
};

// Llamada a la función con el objeto 'persona'
retornaPersonaDos(persona); // Aquí se imprimirá en consola: { nombre: 'Tony', edad: 45, clave: 'Ironman' }

// ----------- Ejemplo 5: Desestructuración directamente en el argumento ----------------------------

const retornaPersonaTres = ({ nombre, edad }) => {
  console.log(nombre, edad);
};

// Llamada a la función con el objeto 'persona'
retornaPersonaTres(persona); // Aquí se imprimirá en consola: { nombre: 'Tony', edad: 45 }

// ----------- Ejemplo 6: Asignación de valores predeterminados en desestructuración ----------------------------

const retornaPersonaCuatro = ({ nombre, edad, rango = 'capitán' }) => {
  console.log(nombre, edad, rango);
};

// Llamada a la función con el objeto 'persona'
retornaPersonaCuatro(persona); // Aquí se imprimirá en consola: { nombre: 'Tony', edad: 45, rango: 'capitán' }
// ----------- Ejemplo 7: Asignación de valores predeterminados en desestructuración - Persona con rango  -----------

const personaConRango = {
  nombre: 'Tony',
  edad: 45,
  rango: 'soldado',
};

const retornaPersonaCinco = ({ nombre, edad, rango = 'capitán' }) => {
  console.log(nombre, edad, rango);
};

// Llamada a la función con el objeto 'personaConRango'
retornaPersonaCinco(personaConRango); // Se imprimirá en consola: { nombre: 'Tony', edad: 45, rango: 'soldado' }

// --------------------------- Ejemplo 8 :---------------------------
const retornaPersonaOcho = ({ clave, nombre, edad, rango }) => {
  const nombreClave = {
    nombreClave: clave,
    edad: edad,
  };

  return nombreClave;
};

const avenger = retornaPersonaOcho(persona);
console.log(avenger);

// TAREA:
const usesContext = ({ clave, nombre, edad, rango }) => {
  const nombreClave = {
    nombreClave: clave,
    anios: edad,
  };

  return nombreClave;
};

const avengerDos = usesContext(persona);
console.log(avengerDos);

// SOLUCION
const { nombreClave, anios } = usesContext(persona);
console.log('Ejemplo 9:', nombreClave, anios);

// --------------- Ejemplo 9: Desestructuración anidada de objetos ---------------------------

const usesContextTres = ({ clave, nombre, edad, rango = 'Capitán' }) => {
  // console.log( nombre, edad, rango );

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const { nombreClaveDos, aniosDos } = usesContextTres(persona);

console.log(nombreClaveDos, aniosDos);
// Error
// const { latitud, longitud } = latlng;

const {
  latlng: { lat, lng },
} = usesContextTres(persona);

console.log(lat, lng);
