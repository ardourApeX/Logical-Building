const matrix = [[0, 1, 1], [2, 1, 1], [1, 1, 1]]
const m = matrix.length;
const n = matrix[0].length;
if (m === n) {
    let identity = []
    for (let i = 0; i < n; i++) {
        let temp = []
        for (let j = 0; j < n; j++) {
            if (i === j) {
                temp.push(1)
            }
            else {
                temp.push(0)
            }
        }
        identity.push(temp)
    }
    console.log(identity)

}
else {
    console.log("Matrix should be a square matrix ")
}