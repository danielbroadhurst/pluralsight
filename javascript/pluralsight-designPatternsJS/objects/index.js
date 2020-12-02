// Creating an object
let obj = {};
// Using Object.create
let nextObj = Object.create(Object.prototype);
// Using New Object
let lastObj = new Object();

// Assigning Values
let objAssign = {};
objAssign.param = "new value"; // obj['param'] = 'new value';
console.log(objAssign.param); //
// Using Variable
let objVar = {};
let val = "value";
objVar[val] = "new value"; // obj['param'] = 'new value';
console.log(objVar[val]); //

/**
 * Demo Task
 */
let task = {}
task.title = "My Task"
task.description = "My Description"
task.toString = function () {
  return this.title + ' ' + this.description
}
console.log(task.toString());
let taskAlt = {
  title: "My Task",
  description: "My Description",
  toString: function () {
    return this.title + ' ' + this.description
  }
}
console.log(taskAlt.toString());

/**
 * Define Property on Object
 */
let taskDef = {
  title: "My Task",
  description: "My Description",
}
Object.defineProperty(taskDef, 'toString', {
  value: function () {
    return this.title + ' ' + this.description
  },
  writable: true, // determines if value from being updated
  enumerable: true, // should the value be contained when object is iterated over
  configurable: true // determines if the values attributes can be redefined
})
console.log(taskDef.toString());

/**
 * Inheritance in Objects using Object.create()
 */
let urgentTask = Object.create(task)
Object.defineProperty(urgentTask, 'toString', {
  value: function () {
    return this.title + ' is urgent'
  },
  writable: true, // determines if value from being updated
  enumerable: true, // should the value be contained when object is iterated over
  configurable: true // determines if the values attributes can be redefined
})
console.log(urgentTask.toString());