const fs = require('fs');
const express = require('express');

const app = express();

app.post('/', (req, res, next) => {
  
  // create write file stream
  const writeFileStream = fs.createWriteStream('./file-on-backend.txt')
  
  // attaches writable stream to request
  req.pipe(writeFileStream);
  
  // prints buffer content whenever data arrives
  req.on("data", (chunk) => {
    if (chunk.toJSON) {
      console.log(chunk.toString(), chunk.toJSON().data);  
    }
  })
  
  req.on('end', next);
});

app.listen(3000);