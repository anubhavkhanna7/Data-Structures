var shortestPathBinaryMatrix = function (grid) {
  let gridLen = grid.length

  // base case
  if (grid[0][0] === 1 || grid[gridLen - 1][gridLen - 1] === 1) return -1

  const isIndexValid = (i, j) => {
    if (i < 0 || j < 0 || i >= gridLen || j >= gridLen) return false
    return true
  }

  let availableDirections = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [1, 1], [1, -1]]

  let queue = [[0, 0, 1]]
  grid[0][0] = 1

  while (queue.length) {
    let [row, col, stepCount] = queue.shift()

    if (row === gridLen - 1 && col === gridLen - 1) return stepCount

    for (let i = 0; i < availableDirections.length; i++) {
      let newRow = row + availableDirections[i][0]
      let newCol = col + availableDirections[i][1]

      if (isIndexValid(newRow, newCol) && grid[newRow][newCol] === 0) {
        queue.push([newRow, newCol, stepCount + 1])

        grid[newRow][newCol] = 1
      }
    }
  }

  return -1
};