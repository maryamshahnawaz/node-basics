
const EventEmitter = require('events');

const customEmitter = new EventEmitter();


// we can pass parameter in events
// events are core building blocks of code
// always on methods comes first then 
customEmitter.on('response', (name, id) => {
 console.log(`data received ${name} with id:${id}`)
})

customEmitter.on('response', () => {
 console.log(`some other data received`)

})

customEmitter.emit('response', "john", 34);


// --------------Learning about JSON----------------


// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package);
//manual approach (create package.json in the root, create properties etc)
// npm init (step bt step, press enter to skip)
// npm init -y (everything default)
// (definition of json package) If i want to install local package it will save stored as a dependency

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems)
console.log('hello yellow')