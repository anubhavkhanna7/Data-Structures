var uniquePathsIII = function (grid) {
  const rowCount = grid.length, colCount = grid[0].length
  let retval = 0
  const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const isValid = (i, j) => i >= 0 && j >= 0 && i < rowCount && j < colCount && grid[i][j] !== -1
  let start = null, end = null, availableEmptySlots = 0

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (grid[i][j] === 1) {
        start = [i, j]
      } else if (grid[i][j] === 2) {
        end = [i, j]
      } else if (grid[i][j] === 0) {
        availableEmptySlots++
      }
    }
  }

  const traverse = (row, col, remainingSlots) => {
    if (remainingSlots === 0 && row === end[0] && col === end[1]) {
      retval++
      return
    }


    for ([dx, dy] of direction) {
      const newRow = row + dx
      const newCol = col + dy
      if (isValid(newRow, newCol)) {
        grid[newRow][newCol] = -1
        traverse(newRow, newCol, remainingSlots - 1)
        grid[newRow][newCol] = 0
      }
    }

  }

  grid[start[0]][start[1]] = -1
  traverse(start[0], start[1], availableEmptySlots + 1)

  return retval
};