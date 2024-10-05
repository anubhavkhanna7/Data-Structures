/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let maxLen = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const memo = new Map();

  const isIndexValid = (i, j) => i >= 0 && j >= 0 && i < rows && j < cols;

  const traverse = (row, col) => {
    const key = `${row}-${col}`;
    if (memo.has(key)) return memo.get(key);

    let maxCount = 1;

    for (let [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (isIndexValid(newRow, newCol) && matrix[newRow][newCol] > matrix[row][col]) {
        maxCount = Math.max(maxCount, 1 + traverse(newRow, newCol));
      }
    }

    memo.set(key, maxCount);
    return maxCount;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      maxLen = Math.max(maxLen, traverse(i, j));
    }
  }

  return maxLen;
};
