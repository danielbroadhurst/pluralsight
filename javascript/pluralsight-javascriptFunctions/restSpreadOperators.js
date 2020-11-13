// Default Params
function defaultParam(name = "World") {
  console.log("Hello " + name, "DEFAULT PARAMS");
}
defaultParam();
defaultParam("John");

// Rest Params
let restParams = function greet(...names) {
  names.forEach((name) => console.log("Hi " + name + "Rest Param"));
};
restParams("Welcome", "Name", "Greet");

// Spread Operators
function display(char1, char2, char3, char4, ...others) {
  console.log(char1, char2, char3, char4, "Spread");
  console.log(others);
}
let letters = "abcdefg";
display(...letters);
