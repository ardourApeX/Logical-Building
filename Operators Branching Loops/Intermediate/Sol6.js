const readlineSync = require("readline-sync");
function isPrime(num) {
    if (num === 1) {
        return false
    }
    else if (num === 2 || num === 3) {
        return true
    }
    let limit = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= limit; i++) {
        if (num % 2 === 0) {
            return false
        }
    }
    return true
}
const num = readlineSync.question("Enter the number ");
console.log(isPrime)