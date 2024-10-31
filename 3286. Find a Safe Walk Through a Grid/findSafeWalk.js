var findSafeWalk = function (grid, health) {
  const rowCount = grid.length, colCount = grid[0].length

  const isNextStepValid = (row, col) => row >= 0 && col >= 0 && row < rowCount && col < colCount && grid[row][col] !== -1
  const directions = [[0, 1], [-1, 0], [0, -1], [1, 0]]
  const memo = new Map()
  const key = (row, col, healthLeft) => `${row}-${col}-${healthLeft}`

  const traverseThroughGrid = (row, col, remainingHealth) => {
    if (remainingHealth < 1) return false
    if (row === rowCount - 1 && col === colCount - 1 && remainingHealth >= 1) return true

    if (memo.has(key(row, col, remainingHealth))) return memo.get(key(row, col, remainingHealth))

    for ([dx, dy] of directions) {
      const newRow = row + dx, newCol = col + dy
      if (isNextStepValid(newRow, newCol)) {
        let temp = grid[newRow][newCol]

        const newHealth = remainingHealth - grid[newRow][newCol]
        grid[newRow][newCol] = -1

        if (newHealth >= 1 && traverseThroughGrid(newRow, newCol, newHealth)) {
          memo.set(key(row, col, remainingHealth), true)
          grid[newRow][newCol] = temp;
          return true
        }

        grid[newRow][newCol] = temp
      }
    }

    memo.set(key(row, col, remainingHealth), false)
    return false
  }


  return traverseThroughGrid(0, 0, health - grid[0][0])
};