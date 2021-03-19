const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ")
function toBinary(num) {
    let quotient = parseInt(num);
    let binaryNum = "";
    while (quotient != 0) {
        binaryNum += String(quotient % 2);
        quotient = Math.floor(quotient / 2);
    }
    return binaryNum.split("").reverse().join("")

}
console.log(toBinary(num))