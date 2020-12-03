/**
 * Factory Pattern
 * Used to create an object - simplifies object creation
 */
const repoFactory = function () {
  this.getRepo = function (repoType) {
    if (repoType === "task") {
      if (this.taskRepo) {
        // Checks if taskRepo has been initilised
        return this.taskRepo;
      } else {
        const taskRepo = require("./module")();
        return taskRepo;
      }
    }
    if (repoType === "user") {
      const userRepo = require("./module")();
      return userRepo;
    }
    if (repoType === "project") {
      const projectRepo = require("./module")();
      return projectRepo;
    }
  };
};

// Cleaner version

const repoFactoryClean = function () {
  let repos = this;
  let repoList = [
    { name: "task", source: "./module" },
    { name: "user", source: "./module" },
    { name: "project", source: "./module" },
  ];
  repoList.forEach(function (repo) {
    repos[repo.name] = require("./module")();
  });
};

/**
 * Working Example
 */
// Require the repo and then dot notation can be used to use the factory
const repos = new repoFactoryClean();
console.log(repos.task.get(1));

module.exports = new repoFactoryClean();
