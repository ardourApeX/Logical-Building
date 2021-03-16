// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const readlineSync = require("readline-sync")
var userInput1 = readlineSync.question("Enter first number ");
var userInput2 = readlineSync.question("Enter second number ");
var userInput3 = readlineSync.question("Enter thrid number ");

if (userInput1 >= userInput2 && userInput1 >= userInput3){
  console.log(userInput1," is the greatest. ")
}
else if(userInput2 >= userInput1 && userInput2 >= userInput3){
  console.log(userInput2," is the greatest. ")
}
else{
  console.log(userInput3," is the greatest. ")
}