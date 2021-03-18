const encodeString = (string, num) => {
    let charCode;
    let resultedString = "";
    for (let i = 0; i < string.length; i++) {
        charCode = string[i].charCodeAt() + num;
        resultedString += String.fromCharCode(charCode);
    }
    return resultedString
}
console.log(encodeString("neogcamp", 2))