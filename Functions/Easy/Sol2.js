const readlineSync = require("readline-sync");
const side = readlineSync.question("Enter the side of Hexagon ");
const areaOfHexagon = (side) => 1.5 * (Math.sqrt(3) * side * side);
console.log(areaOfHexagon(side))