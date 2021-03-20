let subString = []
function subStrings(string) {
    for (let i = 0; i <= string.length; i++) {
        let currentSubString = '';
        for (let j = i; j < string.length; j++) {
            currentSubString += string[j];
            subString.push(currentSubString);
        }
    }
}
subStrings("Hello World")
console.log(subString)