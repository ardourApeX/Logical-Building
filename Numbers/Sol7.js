const readlineSync = require("readline-sync");
const n = parseInt(readlineSync.question("Enter the limit "))
console.log(n * (n + 1) / 2)