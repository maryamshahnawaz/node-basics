
const { readFileSync, writeFileSync } = require('fs');
console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result-sync.txt', `Here is the result ${first},${second}`, { flag: 'a' });
// third method flag is used to append the text instead on overriding
console.log('done with task')
console.log('starting new task')
