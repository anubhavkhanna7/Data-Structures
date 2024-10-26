/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let sumMatrix = new Array(matrix.length).fill(0).map(() => new Array(matrix.length).fill(Infinity))

  const directions = [[1, -1], [1, 0], [1, 1]]
  const isIndexValid = (i, j) => i >= 0 && j >= 0 && i < matrix.length && j < matrix.length

  for (let i = 0; i < matrix.length; i++) {
    sumMatrix[0][i] = matrix[0][i]
  }

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix.length; j++) {
      for ([dx, dy] of directions) {
        const newRow = i + dx, newCol = j + dy
        if (isIndexValid(newRow, newCol)) {
          sumMatrix[newRow][newCol] = Math.min(sumMatrix[newRow][newCol], sumMatrix[i][j] + matrix[newRow][newCol])
        }
      }
    }
  }

  let retval = Infinity

  for (let i = 0; i < matrix.length; i++) {
    retval = Math.min(retval, sumMatrix[matrix.length - 1][i])
  }

  return retval
};