var minimumArea = function (grid) {
  let smallestx = Infinity, smallesty = Infinity, largestx = -Infinity, largesty = -Infinity

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        smallestx = Math.min(smallestx, i)
        smallesty = Math.min(smallesty, j)
        largestx = Math.max(largestx, i)
        largesty = Math.max(largesty, j)
      }
    }
  }

  if (smallestx == largestx && smallesty === largesty) return 1

  return (largestx - smallestx + 1) * (largesty - smallesty + 1)
};