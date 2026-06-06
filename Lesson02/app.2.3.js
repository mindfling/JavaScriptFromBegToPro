console.log('exersice 2.3\n', 
  'Write smth code to calc the hypotenuse of a right-angled triangle using the Pythagorean theorem');


const legA = +prompt('Первый катет');
console.log('1st cathet legA: ', legA);
const legB = +prompt('Второй катет');
console.log('2nd cathet legB: ', legB);

const sideC = (legA ** 2 + legB ** 2) ** (1/2);
console.log('3nd hypotenuse sideC: ' + sideC + " ≈" + sideC.toFixed(3));
alert('Гипотенуза равна = ' + sideC);
console.log('Weldone!');
console.log(`${legA}^2 + ${legB}^2 = ${sideC}^2`);
