function countChar(string) {
    string = string.replace(/ /g, "");
    let checkedChars = []
    let maxCount = 0;
    let character = "";
    [...string].forEach((letter) => {

        if (checkedChars.includes(letter) === false) {
            checkedChars.push(letter);
            regex = new RegExp(letter, 'g')
            let count = string.match(regex).length;
            if (count > maxCount) {
                maxCount = count;
                character = letter
            }
        }

    })
    console.log(character)
}
countChar("I am neogrammer")
