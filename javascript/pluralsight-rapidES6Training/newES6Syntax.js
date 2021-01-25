/**
 * New ES6 Syntax
 */

// let, const and Block Scoping
console.log(productId); // undefined <--- example of hoisting.
var productId = 12;
// console.log(productLetId); // ReferenceError: productLetId <--- example of hoisting.
let productLetId = 12;
console.log(productLetId); // 12
{
  let productLetId = 2000; // Example of Block Scoping. Only usable from inside the block.
}
console.log(productLetId); // 12
const SOME_VAR = 100;
console.log(SOME_VAR); // 100
// SOME_VAR = 10; // TypeError: Cannot redeclare the constant.

// Arrow Functions
var getPrice = () => 5.99; // always returns 5.99
console.log(typeof getPrice); // function
console.log(getPrice()); // 5.99
var getPrice = (count) => count * 4.0;
console.log(getPrice(2)); // 8
var getPrice = (count, tax) => count * 4.0 * (1 + tax); // Parenthesis needed when more than one argument.
console.log(getPrice(2, 0.07)); // 8.56
