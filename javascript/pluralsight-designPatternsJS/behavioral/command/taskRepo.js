const repo = {
  tasks: {},
  commands: [],

  get: function (id) {
    console.log("Getting Task: " + id);
    return {
      name: "New Task from DB",
    };
  },
  save: function (task) {
    repo.tasks[task.id] = task;
    console.log("Saving " + task.name + " to the db.");
  },
  replay: function () {
    for (let i = 0; i < repo.commands.length; i++) {
      const command = repo.commands[i];
      repo.executeNoLog(command.name, command.obj);
    }
  },
};

repo.executeNoLog = function (name) {
  let args = Array.prototype.slice.call(arguments, 1);
  if (repo[name]) {
    return repo[name].apply(repo, args);
  }
};

repo.execute = function (name) {
  let args = Array.prototype.slice.call(arguments, 1);
  repo.commands.push({
    name: name,
    obj: args[0],
  });
  if (repo[name]) {
    return repo[name].apply(repo, args);
  }
};

repo.execute("save", {
  id: 1,
  name: "Task 1",
  completed: false,
});
repo.execute("save", {
  id: 2,
  name: "Task 2",
  completed: false,
});
repo.execute("save", {
  id: 3,
  name: "Task 3",
  completed: false,
});
repo.execute("save", {
  id: 4,
  name: "Task 4",
  completed: false,
});

console.log(repo.tasks);
// Deletes all data in tasks
repo.tasks = {};
console.log(repo.tasks);
// Re-runs all the commands which are stored in the commands
console.log(repo.replay());
console.log(repo.tasks);
