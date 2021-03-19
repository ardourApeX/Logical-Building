const readlineSync = require("readline-sync");
const cp = readlineSync.question("Enter the cost price ")
const sp = readlineSync.question("Enter the selling price ")
const diff = sp - cp
console.log(diff < 0 ? `${diff * -1} Loss` : `${diff} profit`)