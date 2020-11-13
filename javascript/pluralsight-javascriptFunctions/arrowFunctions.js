// Arrow Function
let sum = (num1, num2) => num1 + num2;
let output = sum(10, 5);
console.log(output, "Arrow Function");

// This Keyword
let messageArrow = {
  name: "John",
  regularFunction: function () {
    console.log(this, "Reg Func");
  },
  arrowFunction: () => console.log("Hi " + this.name + "Arrow"),
};
messageArrow.regularFunction();
messageArrow.arrowFunction();
console.log(this, "window");
