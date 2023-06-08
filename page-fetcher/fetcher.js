const request = require('request');


const fs = require('fs');
const process = require('process');

//console.log(process.argv);

const url = process.argv[2];
console.log(url);
 const filePath = process.argv[3];
 console.log(filePath);

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log("response: ", response);
//   console.log("Content-Length: ", response && response.readableLength);
//console.log('body:', body); // Print the HTML for the Google homepage.
//console.log('body length: ', body.length);
  fs.writeFile(filePath, body, function (err) { 
    if (err) throw err; 
    console.log('Downloaded and saved ' + (body.length) + ' bytes to ./' +  filePath); 
  });
});

// fs.writeFile(fileName, 'This is my text and x = ', function (err) { 
//     if (err) throw err; console.log('Replaced!'); 
// });

