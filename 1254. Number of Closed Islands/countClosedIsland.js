/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let visited = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))
  let countOfIsland = 0

  const isIndexValid = (i, j) => (i >= 0 && j >= 0 && i < grid.length && j < grid[0].length)
  let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const traverse = (i, j) => {
    visited[i][j] = 1

    let areBordersClosed = true
    for ([row, col] of directions) {
      let newRow = i + row
      let newCol = j + col
      if (isIndexValid(newRow, newCol)) {
        if (grid[newRow][newCol] === 1) {
          visited[newRow][newCol] = 1
          continue
        } else if (grid[newRow][newCol] === 0 && visited[newRow][newCol] === 0) {
          if (!traverse(newRow, newCol)) {
            areBordersClosed = false
          }
        } else continue;
      } else {
        areBordersClosed = false
      }
    }

    return areBordersClosed
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== 1 && visited[i][j] === 0 && traverse(i, j)) {
        countOfIsland++
      }
    }
  }

  return countOfIsland
};


var closedIsland = function (grid) {
  let rows = grid.length, cols = grid[0].length;
  let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const isIndexValid = (i, j) => i >= 0 && j >= 0 && i < rows && j < cols;

  const traverse = (i, j) => {
    if (!isIndexValid(i, j) || grid[i][j] === 1 || visited[i][j]) return true;
    if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) return false;

    visited[i][j] = true;
    let isClosed = true;

    for (let [dx, dy] of directions) {
      if (!traverse(i + dx, j + dy)) isClosed = false
    }

    return isClosed;
  };

  let countOfIslands = 0;

  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (grid[i][j] === 0 && !visited[i][j] && traverse(i, j)) {
        countOfIslands++;
      }
    }
  }

  return countOfIslands;
};