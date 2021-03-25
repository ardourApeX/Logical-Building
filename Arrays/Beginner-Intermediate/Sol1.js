const arr = [10, 4, 5, 2, 5, 6, 9]
const sumUp = (sum, element) => sum += element
console.log(arr.reduce(sumUp, 0))