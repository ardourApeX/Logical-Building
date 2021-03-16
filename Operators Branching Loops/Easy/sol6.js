// Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const readlineSync = require("readline-sync")
var userInput = readlineSync.question("Enter month name ");
const monthwith31 = ["January", "March", "May", "July", "August", "October", "December"]
if(monthwith31.includes(userInput)){
  console.log("Eneterd month have 31 days");
}
