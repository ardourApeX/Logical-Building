const arr = [10, 4, 5, 2, 5, 6, 9]
const median = array => {
    const mid = Math.floor(arr.length / 2),
        nums = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const mode = array => {
    let counts = {}
    array.forEach(element => {
        if (counts[element] === undefined) {
            counts[element] = 1
        }
        else {
            counts[element] += 1
        }
    });
    return counts
}
Object.keys(counts).forEach(element => {

    if (counts[String(element)] > max) {
        max = counts[String(element)];
        max_num = element

    }
})

let counts = mode(arr);
let max = -1;
let max_num;

console.log(max_num)