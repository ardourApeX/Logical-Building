const string = "neogcamp"
let newString = ""
for (let i = 1; i < string.length; i = i + 2) {
    newString += string[i - 1];
    newString += string[i].toUpperCase()
}
console.log(newString)