const name = 'DIm';
const age = 21;
const canCode = prompt('Tell me if you can code')
// const canCode = true;

console.log('name: ', name);
console.log('age: ', age);
console.log('canCode: ', canCode, !!canCode);

console.log(`Hello! My name is ${name} and I\'m ${age} years old, and I canCode: ${!!canCode}`);
console.log("Hello! My name is", name, "and I\'m", age, "years old, and I canCode:", !!canCode);

if (canCode) {
  console.log('Yes, I realy cool can write code');
} else {
  console.log('Sorry, you cant coding');
}