const http = require('http');

var process = require('process');
console.log(`Process pid ${process.pid}`);
// const server = http.createServer((req, res) => {
//  res.end('Hello world')
// })

// Using Event Emitter API

const server = http.createServer();
// emit request event
// subscribe to it /listen for it / respond to  it
server.on('request', (req, res) => {
 res.end('result')
}).listen(8080);
