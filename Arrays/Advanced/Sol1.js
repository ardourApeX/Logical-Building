const matrix1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
const matrix2 = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
const result = []
for (let i = 0; i < matrix1.length; i++) {
    let temp = []
    for (let j = 0; j < matrix1[0].length; j++) {

        temp.push(matrix1[i][j] + matrix2[i][j])
    }
    result.push(temp)
}
console.log(result)