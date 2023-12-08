//Module - Encapsulated code (only share minimum what we want)
// CommonJS, every file is module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
//if we assign a function inside module we don't need to assign the import into a variable.

require('./7-mind-grenade')



console.log(data);
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter)