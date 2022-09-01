function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(25, 30, sum));

function date(callback) {
    console.log(new Date());
    setTimeout(function () {
        let date = new Date();
        callback(date);
    }, 2000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

function greetin(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greetin, 2000, "David");
