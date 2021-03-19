const readlineSync = require("readline-sync");
const n = parseInt(readlineSync.question("Enter the limit "))
for (let i = 1; i <= 2 * n - 1; i += 2) {
    console.log(i)
}