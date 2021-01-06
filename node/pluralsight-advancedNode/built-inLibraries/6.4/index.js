// node debug index.js <----- Debugger Script
// node --inspect <--- Allows Chrome Dev Tools to debug script

function negativeSum(...args) {
  return args.reduce((arg, total) => {
    return total-arg;
  }, 0);
}

console.log(
  negativeSum(1, 5, 10)
);
