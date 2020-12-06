/**
 * Observer Pattern
 *
 * Allows a collection of objects to watch an object and be notified of changes
 * Benefit  - Allows for loosely coupled system
 *          - One object is the focal point
 *          - Group of objects watch for changes
 */

const Task = require("./task");

const notificationService = function () {
  let message = "Notifying ";
  this.update = function (task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

const loggingService = function () {
  let message = "Logging ";
  this.update = function (task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

const auditingService = function () {
  let message = "Auditing ";
  this.update = function (task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

let task1 = new Task({ name: "create a demo for constructors", user: "Jon" });

let not = new notificationService();
let ls = new loggingService();
var audit = new auditingService();

task1.save();
