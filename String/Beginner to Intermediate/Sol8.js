const string = "abcdefghijklmnopq";
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const count = (vowel, letter) => vowels.includes(letter) ? vowel += 1 : vowel += 0;
let vowel = string.split('').reduce(count, 0)
console.log("Vowels ", vowel);
console.log("Consonants ", string.length - vowel)