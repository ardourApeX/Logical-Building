const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the string ");
let splittedString = string.split("");
let reversedString = splittedString.reverse().join("");