console.log('exersice 2.2');

const name = 'DIm';
const age = 21;
const canCode = true;
// const canCode = prompt('Tell me if you can code')

// console.log('name: ', name);
// console.log('age: ', age);
// console.log('canCode: ', canCode, !!canCode);

console.log(`Hello! My name is ${name} and I'm ${age} years old, and I canCode: ${!!canCode}`);
console.log('Hello! My name is', name, 'and I\'m', age, "years old, and I canCode:", !!canCode);
console.log("Hello! My name is " + name + " and I'm " + age + " years old, and I canCode: " + !!canCode);

if (canCode) {
  console.log('Yes, I realy cool can write code');
} else {
  console.log('Sorry, you cant coding');
}

