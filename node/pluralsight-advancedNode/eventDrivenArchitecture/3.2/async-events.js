const fs = require('fs');
const EventEmitter = require('events'); // Import

class WithTime extends EventEmitter { // Extend
  execute(asyncFunc, ...args) {
    console.time('execute');
    this.emit('begin'); // Emit
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err); // Emit
      }

      this.emit('data', data); // Emit
      console.timeEnd('execute');
      this.emit('end'); // Emit
    });
  }
}

const withTime = new WithTime(); // Init

withTime.on('begin', () => console.log('About to execute')); // AddListener
withTime.on('end', () => console.log('Done with execute')); // AddListener

withTime.on('data', (data) => {
  console.log(`Length: ${data.length}`);
})

withTime.on('error', console.error)

withTime.execute(fs.readFile, __filename);
