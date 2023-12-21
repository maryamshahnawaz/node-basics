const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
 // reading stream
 const fileStream = fs.createReadStream('./content/big.txt');

 fileStream.on('open', () => {
  // writing stream in chunks
  fileStream.pipe(res);
 })
 fileStream.on('error', (err) => {
  console.log(err);
 })
}).listen(3000);