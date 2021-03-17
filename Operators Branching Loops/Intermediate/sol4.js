function fibonacci(num) {
    let first = 0
    let second = 1
    if (num > 0) {
        console.log(first)
    }
    if (num > 1) {
        console.log(second)
    }
    if (num > 2) {
        let temp;
        for (let i = 0; i < num - 2; i++) {
            console.log(first + second);
            temp = second;
            second += first;
            first = temp
        }
    }
}
fibonacci(10)