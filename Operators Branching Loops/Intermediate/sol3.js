const readlineSync = require("readline-sync");
function table(n) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
let num = readlineSync.question("Enter any number ");
table(num);