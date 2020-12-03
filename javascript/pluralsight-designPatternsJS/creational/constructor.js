"use strict";
const Repo = require("./module")(); // Execute the function which is required
const singletonRepo = require("./singleton");
singletonRepo.save("--> Singleton Example: Task from constructor");

/**
 * Constructor Pattern
 * Use to create new object with their own object scope.
 */
function ObjectName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function () {
    return this.param1 + " " + this.param2;
  };
}

/**
 * Demo Task Application
 */
let Task = function (name) {
  this.name = name;
  this.completed = false;

  this.complete = function () {
    console.log("Completing Task: " + this.name);
    this.completed = true;
  };
  this.save = function () {
    console.log("Saving Task: " + this.name);
  };
};
let task1 = new Task("create a demo for constructors");
let task2 = new Task("create a demo for modules");
let task3 = new Task("create a demo for singletons");
let task4 = new Task("create a demo for prototypes");

// task1.complete();
// task2.save();
// task3.save();
// task4.save();

/**
 * Prototype
 * An encapsulation of properties that an object links to.
 * Add shared methods on to the prototype so that they are linked between objects
 */

let TaskProto = function (data) {
  this.name = data.name;
  this.completed = false;
};

TaskProto.prototype.save = function () {
  console.log("Saving Task: " + this.name);
  Repo.save(this);
};
TaskProto.prototype.complete = function () {
  console.log("Completing Task: " + this.name);
};

let taskProto1 = new TaskProto("create a demo for constructors");
let taskProto2 = new TaskProto("create a demo for modules");
let taskProto3 = new TaskProto("create a demo for singletons");
let taskProto4 = new TaskProto("create a demo for prototypes");

// taskProto1.complete();
// taskProto2.save();
// taskProto3.save();
// taskProto4.save();

/**
 * Constructor Node
 * This means it can be used elsewhere in a node application.
 */
/**
 * Classes
 */
class TaskClass {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    console.log("Completing Task: " + this.name);
    this.completed = true;
  }
  save() {
    console.log("Saving Task: " + this.name);
  }
}
// let taskClass1 = new TaskClass('create a demo for constructors')
// let taskClass2 = new TaskClass('create a demo for modules')
// let taskClass3 = new TaskClass('create a demo for singletons')
// let taskClass4 = new TaskClass('create a demo for prototypes')

// taskClass1.complete();
// taskClass2.save();
// taskClass3.save();
// taskClass4.save();

module.exports = TaskProto;
