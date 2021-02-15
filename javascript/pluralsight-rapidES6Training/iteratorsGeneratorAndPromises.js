/**
 * Iterators, Generators and Promises
 */

// Iterators
let ids = [900, 9001, 9002];
console.log(typeof ids[Symbol.iterator]); // function
let it = ids[Symbol.iterator]();
it.next();
it.next();
console.log(it.next()); // { done: false, value: 9002 }

let idMaker = {
  [Symbol.iterator]() {
    let nextId = 8000;
    return {
      next() {
        let value = nextId > 8002 ? undefined : nextId++;
        let done = !value;
        return {
          value,
          done,
        };
      },
    };
  },
};
for (const v of idMaker) {
  console.log(v); // 8000 8001 8002
}

// Generators
function* process() {
  try {
    yield 8000;
    yield 8001;
    yield* [1, 2, 3];
    let result = yield;
    console.log(`result is ${result}`); // result is 200
  } catch (error) {
    console.log(error); // foo
  }
}
let itGen = process();
console.log(it.next()); // { done: false, value: 8000 }
console.log(it.next()); // { done: false, value: 8001 }
console.log(it.next()); // { done: false, value: 1 }
console.log(it.next()); // { done: false, value: 2 }
console.log(it.next()); // { done: false, value: 3 }
console.log(it.next(200)); // { done: true, value: undefined }
console.log(it.throw("foo"));

for (const id of process()) {
  console.log(id); // 8000 8002 1 2 3
}

// Promises
function doAsync(cache = false) {
  if (cache) {
    Promise.resolve("auto resolve"); // simulates a promise resovling.
  }
  let p = new Promise((resolve, reject) => {
    console.log("in promise");
    setTimeout(() => {
      console.log("resolving");
      resolve(true);
    }, 2000);
  });
}

let prom = doAsync()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

let p1 = new Promise.resolve();
let p2 = new Promise.resolve();
// assume p1 resolves after 3 seconds
// assume p2 resolves after 5 secondss
Promise.all([p1, p2]).then(
  function (value) {
    console.log("OK"); // after 5 seconds when both promises resolve then OK is printed out
  },
  function (reason) {
    console.log("nope");
  }
);
// assume p1 resolves after 3 seconds
// assume p2 resolves after 5 secondss
Promise.race([p1, p2]).then(
  function (value) {
    console.log("OK"); // after 3 seconds when one promise resolves then OK is printed out
  },
  function (reason) {
    console.log("nope");
  }
);
