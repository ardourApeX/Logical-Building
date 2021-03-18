const readlineSync = require("readline-sync");
const userInput = readlineSync.question("Enter the string ");
const userInputInList = userInput.split(" ")
console.log(userInputInList.length)