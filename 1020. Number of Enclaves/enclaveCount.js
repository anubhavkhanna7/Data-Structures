
var numEnclaves = function (grid) {

  const isIndexValid = (i, j) => i >= 0 && j >= 0 && i < grid.length && j < grid[0].length && grid[i][j] === 1
  const traverse = (i, j) => {
    if (!isIndexValid(i, j)) return

    grid[i][j] = 0

    traverse(i - 1, j)
    traverse(i + 1, j)
    traverse(i, j + 1)
    traverse(i, j - 1)
  }

  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 1) traverse(i, 0)
    if (grid[i][grid[i].length - 1] === 1) traverse(i, grid[i].length - 1)
  }

  for (let j = 0; j < grid[0].length; j++) {
    if (grid[0][j] === 1) traverse(0, j)
    if (grid[grid.length - 1][j] === 1) traverse(grid.length - 1, j)
  }

  let retval = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) retval++
    }
  }

  return retval
};