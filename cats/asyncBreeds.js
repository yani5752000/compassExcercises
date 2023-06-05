// asyncBreeds.js
const fs = require('fs');
let output;

const breedDetailsFromFile = function(breed, callback) {
  
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    //if (!error) return data;
    // if(!error) {
    //     cosole.log("here is the data");
    //     console.log(data);
    // }
    output = data;
    callback();
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
breedDetailsFromFile('Bombay', () => {
    console.log("hi now");
    console.log(output);
});