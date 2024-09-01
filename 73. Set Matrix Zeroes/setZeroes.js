var setZeroes = function(matrix) {
  let colEscape = new Set()
  let rowEscape = new Set()

  for (let i = 0; i<matrix.length; i++) {
      for (let j = 0; j<matrix[0].length; j++) {
          if (matrix[i][j] === 0) {
              rowEscape.add(i)
              colEscape.add(j)
          }
      }
  }

  for (let i = 0; i<matrix.length; i++) {
      for (let j = 0; j<matrix[0].length; j++) {
          if (rowEscape.has(i) || colEscape.has(j)) {
              matrix[i][j] = 0
          }
      }
  }
  return matrix
};