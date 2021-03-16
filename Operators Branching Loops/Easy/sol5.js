// write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const readlineSync = require("readline-sync")
var userInput1 = readlineSync.question("Enter first number ");
var userInput2 = readlineSync.question("Enter second number ");
var userInput3 = readlineSync.question("Enter thrid number ");

if (userInput1 <= userInput2 && userInput1 <= userInput3){
  console.log(userInput1," is the smallest. ")
}
else if(userInput2 <= userInput1 && userInput2 <= userInput3){
  console.log(userInput2," is the smallest. ")
}
else{
  console.log(userInput3," is the smallest. ")
}