setInterval(() => {
 console.log('hello world')
}, 2000);

// difference between settimeout and set interval (setinterval runs in increment, event loop will evoke call back function every two seconds )
// process stays alive unless
// Kill process CONTROL + C
// unexpected error
console.log('I will run first')