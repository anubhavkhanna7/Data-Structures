var minPathSum = function(grid) {
  for (let i = 0; i< grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (i === 0) {
              if (j !== 0) {
                  grid[i][j] += grid[i][j-1]
              }
          } else if (j === 0) {
              grid[i][j] += grid[i-1][j]
          } else {
              grid[i][j] = Math.min(grid[i][j] + grid[i-1][j], grid[i][j] + grid[i][j-1])
          }

      }
  }

  return grid[grid.length-1][grid[0].length-1]
};