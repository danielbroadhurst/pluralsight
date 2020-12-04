/**
 * Decorator Pattern
 *
 * Used to add new functionality to an existing object, without being obtrusive.
 * Inheritance of another object.
 * Wraps an Object.
 */

/**
 * Simple Decorator Demo
 */

// Task Constructor Function
let Task = function (name) {
  this.name = name;
  this.completed = false;
};
Task.prototype.complete = function () {
  console.log("completing task: " + this.name);
  this.completed = true;
};
Task.prototype.save = function () {
  console.log("saving task: " + this.name);
};

let myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

// Decorating Task with new features
let urgentTask = new Task("Urgent Task");
urgentTask.priority = 2;
urgentTask.notify = function () {
  console.log("notifying important people");
};
urgentTask.complete();
urgentTask.save = function () {
  this.notify();
  Task.prototype.save.call(this);
};
urgentTask.save();

/**
 * More Complicated Decorator Demo using Object Create & Prototype
 */
const UrgentTask2 = function (name, priority) {
  Task.call(this, name);
  this.priority = priority;
};
UrgentTask2.prototype = Object.create(Task.prototype);
UrgentTask2.prototype.notify = function () {
  console.log("notifying important people");
};
UrgentTask2.prototype.save = function () {
  console.log("saving stuff on Urgent Task");
  this.notify();
  Task.prototype.save.call(this);
};
let ut = new UrgentTask2("This is Urgent", 1);
ut.complete();
ut.save();
console.log(ut);
