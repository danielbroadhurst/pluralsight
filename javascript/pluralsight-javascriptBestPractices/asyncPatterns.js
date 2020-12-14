/**
 * Async Patterns
 * - Callbacks
 * - Promises
 * - Async/Await
 */

// Callbacks
// Used Named Functions as Callbacks to avoid Christmas Trees
function findAndValidate(results, done) {
  function validateUser(err, results) {
    if (err) {
      return done(err, null);
    }
    if (results) {
      console.log('validateUser');
      return done(null, true);
    }
  }
  function findUser(err, results) {
    if (err) {
      return done(err, null);
    }
    if (results) {
      console.log('findUser');
      validateUser(err, true);
    }
  }
  findUser(null, results);
}
findAndValidate(true, function (err, res) {
  console.log(err, res);
});
// CB Example
function asyncMethod(message, cb) {
  // Replicates an async method
  setTimeout(function () {
    console.log(message);
    cb();
  }, 500);
}
asyncMethod('Open DB Connection Callback', function () {
  asyncMethod('Find User Callback', function () {
    asyncMethod('Validate User Callback', function () {
      asyncMethod('Do Stuff Callback', function () {});
    });
  });
});

// Promises - Chanin Promises Together
function asyncMethodPromise(message) {
  return new Promise((resolve, reject) => {
    // Replicates an async method
    setTimeout(function () {
      console.log(message);
      resolve();
    }, 500);
  });
}
function findUser() {
  return asyncMethodPromise('Find User Promises');
}
function validateUser() {
  return asyncMethodPromise('Validate User Promises');
}
function doStuff() {
  return asyncMethodPromise('Do Stuff Promises');
}
asyncMethodPromise('Open DB Connection Promises')
  .then(findUser)
  .then(validateUser)
  .then(doStuff);

// Async / Await
async function main() {
  await asyncMethodPromise('Open DB Connection Await');
  await asyncMethodPromise('Find User Await');
  await asyncMethodPromise('Validate User Await');
  await asyncMethodPromise('Do Stuff Await');
}

main();
