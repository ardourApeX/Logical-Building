const matrix = [[0, 1, 1], [2, 1, 1], [1, 1, 1]]
const transpose = []
for (let i = 0; i < matrix.length; i++) {
    let temp = []
    for (let j = 0; j < matrix[0].length; j++) {

        temp.push(matrix[j][i])
    }
    transpose.push(temp)
}
console.log(transpose)