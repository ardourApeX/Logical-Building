const string = "programming camp are amazing"
const word = "programming"
const wordLength = word.length;
const idx = string.indexOf(word);
console.log(string.slice(0, idx) + string.slice(idx + wordLength + 1, string.length))