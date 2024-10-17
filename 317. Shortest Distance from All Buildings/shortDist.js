var shortestDistance = function (grid) {
  let m = grid.length, n = grid[0].length;

  let arr = Array.from({ length: m }, () => Array.from({ length: n }, () => [0, 0]));
  let buildingCount = 0, queue = [], shortestDist = Infinity;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        buildingCount++;
        queue.push([i, j]);
      }
    }
  }

  let visitedSet = new Set();
  const isIndexValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n && grid[i][j] === 0;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const getIndex = (i, j) => `${i}-${j}`;

  const traverse = (i, j) => {
    const queue = [[i, j, 0]]

    while (queue.length > 0) {
      const [row, col, dist] = queue.shift()
      if (grid[row][col] === 0) {
        const [currentDistance, currentVistedHouseCount] = arr[row][col]
        arr[row][col] = [currentDistance + dist, currentVistedHouseCount + 1]
      }

      for ([dirI, dirJ] of directions) {
        const newRow = dirI + row
        const newCol = dirJ + col
        if (isIndexValid(newRow, newCol) && !visitedSet.has(getIndex(newRow, newCol))) {
          queue.push([newRow, newCol, dist + 1])
          visitedSet.add(getIndex(newRow, newCol));
        }
      }
    }
  }

  for (let [row, col] of queue) {
    traverse(row, col);
    visitedSet.clear();
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let [dist, count] = arr[i][j];
      if (count === buildingCount) {
        shortestDist = Math.min(shortestDist, dist);
      }
    }
  }

  return shortestDist === Infinity ? -1 : shortestDist;
};
