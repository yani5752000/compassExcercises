const findWaldo = function(names, found) {
    // for (let i = 0; i < names.length; i++) {
    //   let name = names[i];
    //   if (name === "Waldo") {
    //     found(i);   // execute callback
    //   }
    // }
    names.forEach((element, index) => {
        if(element == "Waldo") {
            found(index);
        }
    });
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(i) {
    console.log("Found him at index " + i +"!");
  });