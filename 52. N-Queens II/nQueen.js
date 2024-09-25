var totalNQueens = function(n) {
  let retval = 0

  const col = new Array(n).fill(false);
  const diag = new Array(2 * n - 1).fill(false);
  const antiDiag = new Array(2 * n - 1).fill(false);

  const traverse = (row) => {
    if (row === n) {
      retval++
      return
    }

    for(let colIndex = 0; colIndex< n; colIndex++) {
      let diagonalIndex = row - colIndex + n - 1
      let antiDiagonalIndex = row + colIndex

      // if an existing queen can attack this position
      if (col[colIndex] || diag[diagonalIndex] || antiDiag[antiDiagonalIndex]) continue;

      col[colIndex] = diag[diagonalIndex] = antiDiag[antiDiagonalIndex] = true

      traverse(row+1)

      col[colIndex] = diag[diagonalIndex] = antiDiag[antiDiagonalIndex] = false
    }
  }

  traverse(0)
  return retval
}