const fs = require('fs');
const request = require('request');

// create readable stream
const readStream = fs.createReadStream('file.txt', { highWaterMark: 6 });

// create writable stream
const writeStream = request.post("http://localhost:3000/");

// attaches writable stream to readStream
readStream.pipe(writeStream);

// print buffer data
readStream.on("data", (chunk) => {
  if (chunk.toJSON) {
    console.log(chunk.toString(), chunk.toJSON().data);  
  }
});

readStream.on("end", () => {
  console.log('Finished');
});
