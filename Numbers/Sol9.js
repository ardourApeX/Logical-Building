const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ")
const sumDigits = (sum, digit) => sum += parseInt(digit)
console.log(num.split("").reduce(sumDigits, 0))
