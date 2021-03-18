const string = "we are neoGrammers";
const reverseCharactersOfWord = (string) => {
    let listedString = string.split(" ");
    let splittedWords;
    let reversedString = "";
    for (let i = 0; i < listedString.length; i++) {
        splittedWords = listedString[i].split("");
        splittedWords = splittedWords.reverse();
        reversedString += splittedWords.join("") + " ";
    }
    return reversedString;
}
console.log(reverseCharactersOfWord(string))