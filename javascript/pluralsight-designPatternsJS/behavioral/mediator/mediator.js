/**
 * Mediator Pattern
 *
 * Controls communication between objects to neither object
 * has to be coupled to the others.
 * -- Allows for loosely coupled system
 * -- One object manages all communication
 * -- Many to many relationship
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

const mediator = (function () {
  let channels = {};
  let subscribe = function (channel, context, func) {
    if (!mediator.channels[channel]) {
      mediator.channels[channel] = [];
    }
    mediator.channels[channel].push({ context, func });
  };

  let publish = function (channel) {
    if (!this.channels[channel]) {
      return false;
    }
    let args = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < mediator.channels[channel].length; i++) {
      const sub = mediator.channels[channel][i];
      sub.func.apply(sub.context, args);
    }
  };

  return {
    channels,
    subscribe,
    publish,
  };
})();

// Create a new task
let task1 = new Task({
  name: "create a demo for mediators",
  user: "Jon",
});

// Create Services
let not = new notificationService();
let ls = new loggingService();
var audit = new auditingService();

// Add the Subscribers to a Channel
mediator.subscribe("complete", not, not.update);
mediator.subscribe("complete", ls, ls.update);
mediator.subscribe("complete", audit, audit.update);

// Publish a message to the Channel and attach this Task
task1.complete = function () {
  mediator.publish("complete", this);
  Task.prototype.complete.call(this);
};

task1.complete();
