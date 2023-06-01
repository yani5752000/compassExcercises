var fs = require('fs');
var x = 1;
fs.writeFile('mynewfile3.txt', 'This is my text and x = ' + ++x, function (err) { 
    if (err) throw err; console.log('Replaced!'); 
});

console.log("x is " + x);
