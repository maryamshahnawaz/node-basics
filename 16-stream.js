// Streams are used to read and write subsequential
const { createReadStream } = require('fs');
// create read stream reads data in chunks
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' });


// default 64kb but we can also control by passing in object inside createReadStream (first argument will be file path, second would be object {highWaterMark:90000})
// last buffer - remainder

stream.on('data', (result) => {
 console.log(result)
})
stream.on('error', (err) => console.log(err))
