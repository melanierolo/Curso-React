/* 15 - TEMPLATE STRING */

//examples 1:
const names = 'Melanie';
const lastname = 'Rodas';

const fullName1 = names + ' ' + lastname;
const fullName2 = `Hello,${names} ${lastname}`;
const fullName3 = `Welcome
${names} 
${lastname}`;

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);

//examples 2:

function getGreeting1() {
  return 'Hello world';
}

function getGreeting2(fullName1) {
  return 'Hello world ' + fullName1;
}

console.log(`This is a sentence: ${getGreeting1()}`);
console.log(`This is a sentence: ${getGreeting2()}`); //undefined
console.log(`This is a sentence: ${getGreeting2(fullName1)}`);
