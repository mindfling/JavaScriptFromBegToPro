/**
 * Practice exercise 2.4
 * 
 * Create variables for three numbers: a, b, and c. Update these variables with
 *  the following actions using the assignment operators:
 * Add b to a
 * Divide a by c
 * Replace the value of c with the modulus of c and b
 * Print all three numbers to the console
 */

let a = 3, b = 4, c = 5;

console.log(a, b, c);

console.log(b + a);
a = b + a;

console.log(a / c, Math.round(a / c));
a = a / c;

console.log(c / b, c % b);
c = c % b;

console.log(a, b, c);