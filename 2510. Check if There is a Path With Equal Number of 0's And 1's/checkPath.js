var isThereAPath = function(grid) {
  let memo = new Map()

  const traverse = (i, j, sum = 0) => {
      if (i >= grid.length || j >= grid[0].length) return false

      let position = `${i}_${j}_${sum}`
      if (memo.has(position)) return memo.get(position)

      const value = grid[i][j] === 1 ? sum+1 : sum-1
  
      if (i === grid.length-1 && j === grid[0].length-1) {
          const result = value === 0;
          memo.set(position, result);
          return result
      }

      const result = traverse(i + 1, j, value) || traverse(i, j + 1, value);
      memo.set(position, result)

      return result
  }

  return traverse(0,0,0)
};