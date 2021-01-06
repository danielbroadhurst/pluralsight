/**
 * Concurrency Model and Event Loop
 * I/O Input / Output
 * Event Loop is used to stop the single thread from becoming blocked.
 * The entity that handles external events and converts them into callback invocations.
 * V8 has the Heap and the Stack as part of the runtime engine
 * Call Stack is a list of functions - First In First Out
 */

/**
 * This is the whole call stack which will then be executed
 * add(9, 9) <---excuted first as it will return data
 * double(9)
 * printDouble(9)
 * anonymous <-- triggers the call stack to be created
 */
(function printNumber() {
  const add = (a, b) => a + b;

  const double = (a) => add(a, a);

  const printDouble = (a) => {
    const output = double(a);
    console.log(output);
  };

  printDouble(9); //18
})();

/**
 * Callbacks will add asynchronous calls to the queue.
 */
const slowAdd = (a, b) => {
  setTimeout(() => {
    // creates a timer in the node environment which executes the callback when complete
    console.log(a + b);
  }, 5000);
};
slowAdd(3, 3); // Results in a callback which is added to the queue which is then added to the stack.
slowAdd(4, 4);
