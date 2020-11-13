// Function
function printAll(args) {
  for (let i = 0; i < args.length; i++) {
    const element = args[i];
    console.log(element, "Function");
  }
}

printAll([1, 2]);

// Function Scope
function greeting() {
  let message = "Hello";
  let sayHi = function hi() {
    message = "Overwrite Scope";
    console.log(message);
  };
  sayHi();
}
greeting();

// Block Scope

let message = "Hello";
if (message === "Hello") {
  var count = 100; // Does not have block scope
}
console.log(count, "Block Scope");

// Immediately Invoked Function

(function () {
  console.log("hello IIF");
})();

// Closures - Function has own context

let greeting2 = (function () {
  let message = "Hello Closure";
  let getMessage = function () {
    return message;
  };
  return {
    getMessage,
  };
})();
console.log(greeting2.getMessage());

function setupCounter(val) {
  return function counter() {
    return val++;
  };
}
let counter1 = setupCounter(0);
console.log(counter1(), "Closures");
console.log(counter1(), "Closures");
let counter2 = setupCounter(5);
console.log(counter2(), "Closures");
console.log(counter2(), "Closures");
