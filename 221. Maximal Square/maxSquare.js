var maximalSquare = function(matrix) {
  let array = new Array(matrix.length+1).fill(0).map(() => new Array(matrix[0].length+1).fill(0))
  let retval = 0
  for (let i = 1; i<array.length; i++) {
      for (let j = 1; j<array[0].length; j++) {
          if (Number(matrix[i-1][j-1])) {
              array[i][j] = Math.min(array[i-1][j], array[i-1][j-1], array[i][j-1]) + 1

              retval = Math.max(retval, array[i][j])
          }
      }
  }

  return Math.pow(retval,2)
};