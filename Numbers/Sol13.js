const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ")
console.log(parseInt(num, 8))