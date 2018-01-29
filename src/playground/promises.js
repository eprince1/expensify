const promise = new Promise((resolve, reject) => {
    resolve("This is resolved data");
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
})