/**
 * Syntax Best Practices
 * Linting scans the code to detect potential problems - JSLint - JSHint - ESLint
 */

// Automatic Semicolon Insertion (ASI)
var a = 12 //; is inserted as the var statement on next line is an offending token 
var b = 13
if(a) {console.log(a)} // {console.log(a);} semicolon is inserted as } is an offending token
console.log(a) // ; semicolon is again inserted automatically
var c = b + a // this will thrown an error as the ( is not an offending token so ; is required
(function () {
  console.log('inside my iife');
  console.log('doing secret stuff');
}())
// (ASI) Restricted Production - continue - break - throw or return
function returnObject() {
  if (somethingTrue) {
    return
    {
      hi: hello // This block will not be accessible as semicolon inserted by the return statement
    }
  }
}

// Curly Braces are used on the same line of functions and return statements
function service() {
  let get = function () {
    console.log('get');
  }
  let set = function () {
    console.log('set');
  }
  return {
    get,
    set
  }
}

// Equality 
// == If variables are two different type it will convert them to same type
// === Checks against the type and value of the equality
let x = 1 // 0 would equal false against a false boolean
let y = '1' // 1 would equal true again a true boolean
if (x == y) { 
  console.log('Equals');
} else {
  console.log('Not Equals');
}
// Do not use if(x) to check if variable exists as it uses ==
if (x) {
  console.log('Exists');
} else {
  console.log('Doesnt Exist');
}
if (typeof x !== 'undefined') {
  console.log(Exists);
} else {
  console.log('Doesnt Exist');
}

// Variables
// - Put all var declarations to the top of your scope.
// - Use well name variable
// Hoisting = JS Default Behaviour of moving all declarations to the top of the current scope 
console.log(myVariable); // Will not cause and error but it will return undefined and not 10
var myVariable = 10;
function func() {
  var myVariable; // Local to the function scope and does not affect out myVariable
  myVariable = 25 // Does not error as the variable exists in outer scope
}
console.log(myVariable); // 10 as the function is not called
func()
console.log(myVariable); // 25 as the function is called

// Functions - First Class Objects
// Declaration
myFunc(); // Hoisted so this can be called anywhere
function myFunc() { 
  console.log('Hi from my func');
}
// Expressions
expression(); // This would be undefined as the expressions are not assigned on frist run through by the compiler
var expression = function () {
  console.log('Hi from my expression');
}

// Overall Best Practice for Coding JS 

// variables first
var myVar = 12;
// functions next
function print(input) {
  // variables first
  var x = 0
  // functions next
  function log() {
    console.log('Log Stuff');
  }
  // run code
  console.log(input);
}
// run code
print(10)