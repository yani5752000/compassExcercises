const doWork = () => {
    return new Promise((resolve, reject) => {
        if(Math.random() > 0.50) {
            return resolve();
        } else {
            return reject();
        }
    }) 
};

doWork()
    .then(() => console.log("it worked"))
    .catch(() => console.log("did not work"))