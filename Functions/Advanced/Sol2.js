const string = "we are neoGrammers"
const toSentenceCase = (stringList) => {
    let tempString;
    let captializeString = "";
    for (let i = 0; i < stringList.length; i++) {
        tempString = stringList[i].charAt(0).toUpperCase() + stringList[i].slice(1);
        captializeString += tempString;
        captializeString += " ";
    }
    return captializeString;
}
console.log(toSentenceCase(string.split(" ")))