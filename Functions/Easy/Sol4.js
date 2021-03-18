const findMin = (min, num) => min > num ? num : min
const arr = [1, 2, 5, 2, 1, 43, 54, 6, 8, 2]
console.log(arr.reduce(findMin, 1000))