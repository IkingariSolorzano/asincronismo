const promise = new Promise((resolve, reject) => {
    resolve("Hey!");
});

const cows = 11;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have enough cows, we have ${cows} cows`);
    } else {
        reject("there is no cows on the farm");
    }
});

countCows
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Finally");
    });
