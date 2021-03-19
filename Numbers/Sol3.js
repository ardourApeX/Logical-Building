const readlineSync = require("readline-sync");
const mass = readlineSync.question("Enter the mass of the object ");
const velocity = readlineSync.question("Enter the velocity of the object ");
console.log(0.5 * mass * velocity * velocity);