/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n === 1) return [["Q"]]

  let retval = []

  let cols = new Array(n).fill(false)
  let diagonal = new Array(2*n -1).fill(false)
  let antiDiagonal = new Array(2*n -1).fill(false)

  const traverse = (row, pairList = []) => {
      if (row === n) {
          const newArr = []

          for (let i = 0; i<pairList.length; i++) {
              let arr = new Array(n).fill('.')
              arr[pairList[i]] = 'Q'
              newArr.push(arr.join(''))
          }

          retval.push(newArr)
          return
      }

      for(let colIndex = 0; colIndex<n; colIndex++) {
          let diagonalIndex = row - colIndex + n - 1
          let antiDiagonalIndex = row +colIndex

          // ignore indices where other queens can attack
          if (cols[colIndex] || diagonal[diagonalIndex] || antiDiagonal[antiDiagonalIndex]) continue;

          cols[colIndex] = diagonal[diagonalIndex] = antiDiagonal[antiDiagonalIndex] = true
          pairList.push(colIndex)

          traverse(row+1, pairList)

          pairList.pop()
          cols[colIndex] = diagonal[diagonalIndex] = antiDiagonal[antiDiagonalIndex] = false
      }
  }

  traverse(0)
  return retval
};