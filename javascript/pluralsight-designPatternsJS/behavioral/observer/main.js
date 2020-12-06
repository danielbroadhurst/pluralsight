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

// Observer list
function ObserverList() {
  this.observerList = [];
}
ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};
ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};
ObserverList.prototype.count = function () {
  return this.observerList.length;
};
ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1);
};
ObserverList.prototype.indexOf = function (obj, startIndex) {
  let i = startIndex;
  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
};

// Wrap Task in an Observer
const ObservableTask = function (data) {
  Task.call(this, data);
  this.observers = new ObserverList();
};
ObservableTask.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};
ObservableTask.prototype.notify = function (context) {
  let observerCount = this.observers.count();
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i)(context);
  }
};
ObservableTask.prototype.save = function () {
  this.notify(this);
  Task.prototype.save.call(this);
};
ObservableTask.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

// Create a new task
let task1 = new ObservableTask({
  name: "create a demo for constructors",
  user: "Jon",
});

// Create Services
let not = new notificationService();
let ls = new loggingService();
var audit = new auditingService();

// Add the observers to the tast
task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);

task1.save();
// Remove a listener
task1.removeObserver(audit.update);
// Save again
task1.save();
