
const fs = require('fs');
const chir = require('./test1.js');
const yargs = require('yargs');
// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
    if (err) throw err;
  });
const MyEmitter = require('events');
  const myEmitter = new MyEmitter();
  const myEmitter1 = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//   console.log(a, b, this, this===myEmitter);
//   // Prints: a b {}
// });
myEmitter1.on('event', (a, b) => {
    console.log('soumya');
    // Prints: a b {}
  });
myEmitter1.emit('event', 'a', 'b');
const abc = chir("Saheli");
console.log(abc)
yargs.version('1.1.0')
console.log(yargs.argv)

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
      console.log('Adding a new note!')
  }
}).parse();