var findMaxFish = function (grid) {
  const rowCount = grid.length, colCount = grid[0].length
  const isValidSpot = (row, col) => row >= 0 && col >= 0 && row < rowCount && col < colCount && grid[row][col] > 0
  const directions = [[-1, 0], [0, -1], [0, 1], [1, 0]]

  const fisherDoFishing = (row, col) => {
    let count = grid[row][col]
    grid[row][col] = 0

    for ([dx, dy] of directions) {
      if (isValidSpot(row + dx, col + dy)) {
        count += fisherDoFishing(row + dx, col + dy)
      }
    }
    return count
  }

  let maxCountOfFishesCaught = 0

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (grid[i][j] > 0) {
        maxCountOfFishesCaught = Math.max(maxCountOfFishesCaught, fisherDoFishing(i, j))
      }
    }
  }

  return maxCountOfFishesCaught
};