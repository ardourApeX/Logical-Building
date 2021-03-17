const readlineSync = require("readline-sync")
const weekends = ["Saturday", "saturday", "sunday", "Sunday"]
const userDay = readlineSync.question("Enter any day ");
if (weekends.includes(userDay)) {
    console.log(`${userDay} is a weekend`)
}
else {
    console.log(`${userDay} is weekday`)
}