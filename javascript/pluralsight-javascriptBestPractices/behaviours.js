/**
 * Behaviours
 * - 'use strict' mode will help avoid errors
 */

//  Global Variables
var toPrint = "print me";
function print(out) {
  // 'use strict'; // This will stop JS from automatically creating variables. Works within Scope
  stringToPrint = out; // JS will create a global var LHR (Left Handed Reference) for you!
  console.log(stringToPrint); // Hello
  console.log(toPrint); // print me
}
// console.log(stringToPrint); // causes error as var is not accessible 
print('Hello');
console.log(stringToPrint); // Hello as var has been set

// Read Only Properties
var obj = {};
Object.defineProperty(obj, 'readOnly', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'This var is read only'
})
obj.readOnly = 'I wrote this'; // JS would just ignore this and not Error out.
console.log(obj.readOnly);
(function () {
  'use strict'
  var obj = {};
  Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'This var is read only'
  })
  // obj.readOnly = 'I wrote this'; // JS will now error out because of use strict.
  console.log(obj.readOnly);
})()

// Deleting Properties
var obj = {a: 100, b: 200}, myVar = 10;
console.log(obj); // {a: 100, b: 200}
delete obj.a 
console.log(obj); // {b: 200}
console.log(myVar); // 10
delete myVar 
console.log(myVar); // 10 as JS will not delete variables or objects 'use strict' would cause an error

// Duplicates
function x(a,b,a) {
  console.log(a); // 3 'use strict' would throw an error for duplicate argument
}
x(1,2,3)

// Octals and Hexidecimals - JS will change numbers to Hexidecimals and Octals is they begin with 0
var x = 120,
    y = 012; // Octal = 10 use parseInt(12, 8) to product an Octal in 'use strict' mode
console.log(x+y); // 130

// 'with' Statement - Stopped using this as it has been depreciated
var obj = {
  a: {
    b: {
      c: 'Hello'
    }
  }
}
console.log(obj.a.b.c); // Hello
with(obj.a.b) {
  console.log(c); // Hello
}
var c = 'this is important'; // Causes confusion as the c below is not called
with(obj.a.b) {
  console.log(c); // Hello
}
(function (newVar) { // Use an IIFE to access the variable from within an object
  console.log(newVar); // Hello
}(obj.a.b.c))

// this in JS
var obj = {
  val: 'Hi There',
  printVal: function () {
    console.log(this.val);
  }
}
obj.printVal(); // 'Hi There' - this scope is the obj function
var obj2 = {
  val: 'Whats Up'
}
obj2.printVal = obj.printVal;
obj2.printVal() // 'Whats Up' - this scope is now in the obj2 function
var print = obj.printVal;
print(); // 'undefined' this is binded to the global scope so this.val does not exist - 'use strict' would throw an error
var print = obj.printVal.bind(obj2)
print(); // 'Whats Up' print has been binded to obj2 so this relates to obj2

// this is new Objects
var obj = function () {
  var _this = this; // creates a reference to the object and stores it in _this
  this.hello = 'hello';

  this.greet = function () {
    console.log(_this.hello);
  }

  this.delayGreeting = function () {
    setTimeout(_this.greet, 1000) // one way to bind this 'this.greet.bind(this)'
  }
}
obj(); // does nothing
var greeter = new obj(); // Creates a new Scope and causes obj to add a return this;
greeter.greet() // Hello
// greeter.delayGreeting() // undefined as this.greet is not calling the function - no _this or bind on function
greeter.delayGreeting() // hello as this this value is now bound