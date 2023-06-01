var fs = require('fs');
fs.readFile('demofile1.txt', 'utf8', function(err, data) {
 console.log(data);
});

console.log("is this after reading the file?");