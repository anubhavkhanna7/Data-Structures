var cutOffTree = function (forest) {
  const rowCount = forest.length, colCount = forest[0].length;
  const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];

  const isValid = (row, col) => row >= 0 && col >= 0 && row < rowCount && col < colCount && forest[row][col] !== 0;

  const trees = [];
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (forest[row][col] > 1) {
        trees.push([forest[row][col], row, col]);
      }
    }
  }

  trees.sort((height1, height2) => height1[0] - height2[0]);

  const bfs = (startRow, startCol, targetRow, targetCol) => {
    const queue = [[startRow, startCol, 0]];
    const visited = Array.from({ length: rowCount }, () => Array(colCount).fill(false));
    visited[startRow][startCol] = true;

    while (queue.length > 0) {
      const [row, col, steps] = queue.shift();

      if (row === targetRow && col === targetCol) return steps;

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (isValid(newRow, newCol) && !visited[newRow][newCol]) {
          visited[newRow][newCol] = true;
          queue.push([newRow, newCol, steps + 1]);
        }
      }
    }

    return -1;
  };

  let totalSteps = 0;
  let startRow = 0, startCol = 0;

  for (const [_, row, col] of trees) {
    const steps = bfs(startRow, startCol, row, col);
    if (steps === -1) return -1;
    totalSteps += steps;
    startRow = row;
    startCol = col;
  }

  return totalSteps;
};
