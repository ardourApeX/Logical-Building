const readlineSync = require("readline-sync")
const string1 = readlineSync.question("Enter the first stirng ");
const string2 = readlineSync.question("Enter the second string ");
const string3 = readlineSync.question("Enter the third string ");
if (string1.length < string2.length && string1.length < string3.length) {
    console.log("Min ", string1);
}
else if (string2.length < string1.length && string2.length < string3.length) {
    console.log("Min ", string2);
}
else {
    console.log("Min ", string3);
}
if (string1.length > string2.length && string1.length > string3.length) {
    console.log("Max ", string1);
}
else if (string2.length > string1.length && string2.length > string3.length) {
    console.log("Max ", string2);
}
else {
    console.log("Max ", string3);
}