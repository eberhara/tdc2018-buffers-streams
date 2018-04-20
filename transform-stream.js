const { Transform } = require('stream');

const toUpperCaseStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// attach read/write stream to stdin
// attach write stream to read/write stream
process.stdin.pipe(toUpperCaseStream).pipe(process.stdout);