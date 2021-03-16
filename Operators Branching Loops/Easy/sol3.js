// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const readlineSync = require("readline-sync")
var userInput1 = readlineSync.question("Enter first number ");
var userInput2 = readlineSync.question("Enter second number ");
if(userInput1 > userInput2){
  console.log("First number is greather than second number. ")
}
else if (userInput1 < userInput2){
  console.log("Second number is greater than first number. ")
}
else{
  console.log("Both number are same ")
}