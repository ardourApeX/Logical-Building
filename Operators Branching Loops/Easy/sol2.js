const readlineSync = require("readline-sync")
var userInput = readlineSync.question("Enter any number. ");
if(userInput%2===0){
  console.log("Entered number is even. ")
}
else{
  console.log("Entered number is odd");
}