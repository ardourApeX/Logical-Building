const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ")
let numList = num.split("")
numList = numList.reverse()
console.log(numList.join(""))