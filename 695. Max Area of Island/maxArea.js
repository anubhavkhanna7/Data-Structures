var maxAreaOfIsland = function (grid) {
  let maxArea = 0

  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]
  const isValid = (i, j) => i >= 0 && j >= 0 && i < grid.length && j < grid[0].length
  const traverse = (i, j) => {
    let count = 1
    grid[i][j] = 0

    for ([dx, dy] of directions) {
      if (isValid(dx + i, dy + j) && grid[dx + i][dy + j] === 1) {
        count += traverse(dx + i, dy + j)
      }
    }
    return count
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, traverse(i, j))
      }
    }
  }

  return maxArea
};