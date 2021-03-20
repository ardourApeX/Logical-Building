const readlineSync = require("readline-sync");
let string1 = readlineSync.question("Enter the string 1 ");
let string2 = readlineSync.question("Enter the string 2 ");
let finalString = string1.length > string2.length ? string1 + string2 : string2 + string1;]
console.log(finalString);