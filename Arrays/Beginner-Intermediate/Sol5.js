const arr1 = [3, 5, 2, 9, 4]
const arr2 = [6, 2, 8, 1, 3]
const sumArr = (arr1, arr2) => {
    const sumElement = (total, ele) => total += ele;
    return arr1.reduce(sumElement, 0) + arr2.reduce(sumElement, 0);
}
console.log(sumArr(arr1, arr2))