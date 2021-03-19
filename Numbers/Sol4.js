const readlineSync = require("readline-sync");
const temp = readlineSync.question("Enter the temperature in Fahrenheit ")
console.log((9 * temp) / 5 + 32);