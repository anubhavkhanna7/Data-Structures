var numIslands = function(grid) {
  let count = 0, visited = new Set()
  for (let r = 0; r< grid.length; r++) {
      for (let c = 0; c< grid[0].length; c++) {
          if (traverse(visited, r, c, grid) === true) {
              count++
          }
      }
  }
  return count
};

const traverse = (visited, row, column, grid) => {
  if (row < 0 || row >= grid.length) return false
  if (column < 0 || column >= grid[0].length) return false

  if (grid[row][column] == 0) return false
  const position = `${row}-${column}`
  if (visited.has(position)) return false

  visited.add(position)

  traverse(visited, row+1, column, grid)
  traverse(visited, row-1, column, grid)
  traverse(visited, row, column+1, grid)
  traverse(visited, row, column-1, grid)

  return true
}