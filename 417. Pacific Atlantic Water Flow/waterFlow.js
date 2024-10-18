var pacificAtlantic = function (heights) {
  let m = heights.length, n = heights[0].length;

  // Helpers
  const isValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let pacificReach = Array.from({ length: m }, () => new Array(n).fill(false));
  let atlanticReach = Array.from({ length: m }, () => new Array(n).fill(false));

  const traverse = (queue, reach) => {
    while (queue.length > 0) {
      let [row, col] = queue.shift();

      for (let [dx, dy] of directions) {
        let newRow = row + dx, newCol = col + dy;

        // index is valid, not already traversed and sloped downwards, add to queue
        if (isValid(newRow, newCol) && !reach[newRow][newCol] && heights[newRow][newCol] >= heights[row][col]) {
          reach[newRow][newCol] = true;
          queue.push([newRow, newCol]);
        }
      }
    }
  };

  let pacificQueue = [], atlanticQueue = [];

  for (let i = 0; i < m; i++) {
    pacificQueue.push([i, 0]);
    atlanticQueue.push([i, n - 1]);
    pacificReach[i][0] = true;
    atlanticReach[i][n - 1] = true;
  }
  for (let j = 0; j < n; j++) {
    pacificQueue.push([0, j]);
    atlanticQueue.push([m - 1, j]);
    pacificReach[0][j] = true;
    atlanticReach[m - 1][j] = true;
  }

  traverse(pacificQueue, pacificReach);
  traverse(atlanticQueue, atlanticReach);

  let result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacificReach[i][j] && atlanticReach[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};
