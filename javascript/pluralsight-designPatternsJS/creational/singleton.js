/**
 * Singleton
 * Used to restrict an object to one instance of that object across the platform
 */
const TaskRepo = (function () {
  let taskRepo;
  function createRepo() {
    let taskRepo = new Object("Task");
    taskRepo.counter = 0;
    taskRepo.incrementCounter = function () {
      this.counter++;
      return true;
    };
    return taskRepo;
  }
  return {
    getInstance: function () {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    },
  };
})();

let repo1 = TaskRepo.getInstance();
let repo2 = TaskRepo.getInstance();
console.log(repo1.incrementCounter());
console.log(repo2.incrementCounter());
if (repo1 === repo2) {
  console.log("Same TaskRepo");
}
console.log(repo1.counter, repo2.counter);

/**
 * Node Demo
 */
const repo = function () {
  let called = 0;

  let save = function (task) {
    called++;
    console.log(task + " Called " + called + " times");
  };
  console.log("newing up task repo");
  return {
    save,
  };
};

module.exports = repo(); // Executing the function here in node will effectively create a singleton
