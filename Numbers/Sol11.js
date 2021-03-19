const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ")
const shift = readlineSync.question("Enter position ")
let numList = num.split("")
let len = numList.length
const split = shift % len
let tempArr1 = numList.slice(split, len + 1).concat(numList.slice(0, split))
tempArr1 = tempArr1.join("")