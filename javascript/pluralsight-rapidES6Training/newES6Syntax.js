/**
 * New ES6 Syntax
 */

// #### let, const and Block Scoping #### //
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

// #### Arrow Functions #### //
var getPrice = () => 5.99; // always returns 5.99
console.log(getPrice.hasOwnProperty("prototype")); // false - Does not have access to a prototype field
console.log(typeof getPrice); // function
console.log(getPrice()); // 5.99
var getPrice = (count) => count * 4.0;
console.log(getPrice(2)); // 8
var getPrice = (count, tax) => count * 4.0 * (1 + tax); // Parenthesis needed when more than one argument.
console.log(getPrice(2, 0.07)); // 8.56
var document = {
  addEventListener() {
    return true
  }
}
document.addEventListener('click', function () {
  console.log(this); // #document
})
document.addEventListener('click', () => console.log(this)); // Window - Global context
var invoice = {
  number: 123,
  process: function () {
    console.log(this);
  }
}
invoice.process() // Object { number: 123}
var invoiceArrow = {
  number: 123,
  process: () => console.log(this)
}
invoiceArrow.process() // Window - Global context
var invoiceFunctionArrow = {
  number: 123,
  process: function () {
    return () => console.log(this);
  }
}
invoiceFunctionArrow.process() // Object { number: 123} - context of the function
var newInvoice = {
  number: 456
}
// invoice.process().bind(newInvoice)(); // 123 - You cannot bind a new Object to an arrow function, you cannot change value of this
// invoice.process().call(newInvoice); // 123 - Call, Bind and Apply do not change the value of this.
var getPriceSyntaxError = () => 5.99;
console.log(typeof getPriceSyntaxError); // SyntaxError: Unexpected token => : the arrow symbol cannot be on a new line

// #### Default Function params #### //
var getProduct = function (productId = 1000) {
  console.log(productId);
}
console.log(getProduct()); // 1000 
var getProduct2 = function (productId = 1000, type = 'software') {
  console.log(productId, type);
}
console.log(getProduct2(undefined, 'hardware')); // 1000, 'hardware'
var baseTax = 0.07
var getTotal = function (price, tax = price * baseTax) {
  console.log(price + tax);
}
console.log(getTotal(5.00)); // 5.35 - functions can access external variables
var generateBaseTax = () => 0.07
var getTotal = function (price, tax = price * generateBaseTax()) {
  console.log(price + tax);
}
console.log(getTotal(5.00)); // 5.35 - functions can access external variables
var getTotal = function (price = adjustment, adjustment = 1.00) {
  console.log(price + adjustment);
}
// getTotal(); // SyntaxError
getTotal(5.00); // 6 - price is set to 5 and then adjustment is reset to 1

// #### Rest and Spread #### //
var showCategories = function (productId, ...categories) { // REST
  console.log(categories instanceof Array); // true - categories set to an array
  console.log(categories); // ['search', 'categories']
}
showCategories(123, 'search', 'advertising')
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices); // SPREAD
console.log(maxPrice); // 20 as it is the maximum value
var codeArray = ['A', ...'BCD', 'E'];
console.log(codeArray); // ['A', 'B', 'C', 'D', 'E']

// #### Object Literal Extensions #### //
var price = 5.99, quantity = 10;
var productView = {
  price,
  quantity,
  calculateValue() { // Shorthand
    return this.price * this.quantity
  }
}
console.log(productView.calculateValue()); // 59.9000 - Objects have access to their own properties via the this keyword
var field = 'dynamicField';
var method = 'doIt';
var ident = 'productId';
var price = 5.99;
var productView = {
  property: '',
  [field]: price,
  [method + "-001"]() {
    console.log('in a method');
  },
  get [ident] () { return this.property; },
  set [ident] (value) { this.property = value;}
}
console.log(productView); // {dynamicField: 5.99}
productView['doIt-001'](); // in a method
console.log(productView.productId = 'yes'); // true - fields can be used on getter and setters as well
console.log(productView.productId); // true - fields can be used on getter and setters as well

// #### For ... of Loops #### //
var categories = ['hardware', 'software', 'vaporware']
for (const item of categories) {
  console.log(item); // 'hardware', 'software', 'vaporware'
}

// #### Octal and Binary Literals #### //
var value = 0o10; // represents an octal number
console.log(value); // 8
var value = 0b10 // binary representation of 2
console.log(value); // 2

// #### Template Literals #### //
let invoiceNum = '1350';
let amount = '2000';
console.log(`Invoice Number: ${invoiceNum}`); // Invoice Number: 1350
function processInvoice(segments, ...values) {
  console.log(segments); // ["Invoice: ",  " for ", ""] - text segments of the template literal
  console.log(values); // [1350, 2000] - values passed into the template literal
}
processInvoice `Invoice: ${invoiceNum} for ${amount}`; // Tagged template literal - no parenthesis

// #### Destructuring #### //
let salary = ['32000', '50000', '75000'];
let [ low, average, high ] = salary;
console.log(high); // '75000'
let [ low, ...remaining ] = salary;
console.log(remaining); // ["50000", "75000"]
let salaryNested = ['32000', '50000', ['75000', '99000']];
let [ low, average, [actualLow, actualHigh] ] = salaryNested;
console.log(actualLow); // 75000 - destructured from a nested array
function reviewSalary([low, average], high = '88000') {
  console.log(average); // '550005
}
reviewSalary(['23000', '55000'])
let salaryObj = {
  low: '32000',
  average: '50000',
  high: '75000'
}
let { low, average: newAverage, high } = salary;
console.log(high); // '75000' <--- destructuring works on objects as well
console.log(newAverage); // '50000' <--- rename variables on the fly

// #### Advanced Destructuring #### //
let count = 0;
for (const [a, b] of [[5, 10]]) {
  console.log(`${a} ${b}`); // 5 10
  count++
}
console.log(count); // 1