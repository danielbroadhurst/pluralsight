/**
 * Facade Pattern
 *
 * Used to provide a simplified interface to a complicated system
 */
const Task = function (data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
};

const TaskService = (function () {
  return {
    complete: function (task) {
      task.completed = true;
      console.log("completing task: " + task.name);
    },
    setCompleteDate: function (task) {
      task.completedDate = new Date();
      console.log(task.name + " completed on " + task.completedDate);
    },
    notifyCompletion: function (task, user) {
      console.log("Notifying " + user + " of the completion of " + task.name);
    },
    save: function (task) {
      console.log("saving Task: " + task.name);
    },
  };
})();

// TaskServiceWrapper is the Facade which will wrap TaskService to make carrying out lots
// of instructions in another single command called completeAndNotify
const TaskServiceWrapper = (function () {
  const completeAndNotify = function (task) {
    TaskService.complete(myTask);
    if (myTask.completed === true) {
      TaskService.setCompleteDate(myTask);
      TaskService.notifyCompletion(myTask, myTask.user);
      TaskService.save(myTask);
    }
  };
  return {
    completeAndNotify,
  };
})();

const myTask = new Task({
  name: "MyTask",
  priority: 1,
  project: "Courses",
  user: "Jon",
  completed: false,
});
TaskServiceWrapper.completeAndNotify(myTask);
