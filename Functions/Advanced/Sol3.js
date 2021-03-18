function Sort(Arr) {
    let n = Arr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = Arr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < Arr[j])) {
            Arr[j + 1] = Arr[j];
            j--;
        }
        Arr[j + 1] = current;
    }
    return Arr;
}
const arr = [1, 4, 3, 5, 76, 3, 2, 4, 345]
console.log(Sort(arr))