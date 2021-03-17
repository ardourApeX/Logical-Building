var customArr = []
for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 15 !== 0) {
        customArr.push("Fizz");
    }
    else if (i % 5 === 0 && i % 15 !== 0) {
        customArr.push("Buzz");
    }
    else if (i % 15 === 0) {
        customArr.push("FizzBuzz")
    }
    else {
        customArr.push(i);
    }

}
console.log(customArr)