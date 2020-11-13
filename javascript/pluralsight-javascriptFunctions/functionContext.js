// Function Context
let contextGreeting = {};
contextGreeting.sayHi = function () {
  console.log("Hi", "context");
  console.log(this, "context");
};
function sayIt() {
  console.log("Hi", "context");
  console.log(this, "context");
}
let greetingContext = new sayIt();
sayIt();

// Call Method
let person1 = { name: "John", age: 22 };
let person2 = { name: "Mary", age: 22 };

let sayHelloCall = function (message) {
  console.log(message + " " + this.name);
};
sayHelloCall.call(person1, "Call Method");
sayHelloCall.call(person2, "Call Method");

// Apply Method
function introduction(name, profession) {
  console.log("My name is " + name + " and I am " + profession + ".");
}
introduction("John", "student");
introduction.apply(undefined, ["Mary", "lawyer"]);
introduction.call(undefined, "James", "artist");

// Bind Method
let person3 = {
  name: "Mary",
  getName: function () {
    return this.name;
  },
};
let person4 = { name: "John" };
let getNameCopy = person3.getName.bind(person4);
console.log(getNameCopy(), "Bind");

// Built In Functions
let x = 1,
  y = 2,
  s = "abc";
console.log(eval(`x + y + s`), "eval");
console.log(parseInt("F", 16), "Parse Int"); // base 16
console.log(parseInt("15", 10), "Parse Int"); // decimal
console.log(parseFloat("15", 10), "Float"); // decimal
console.log(escape(" &$"), "escape string");
console.log(unescape("%20%26%24"), "unescape string");
