var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  let remainingCount = rows * cols;
  let retval = [];

  const coverMatrix = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, down, left, up
  const isValid = (row, col) => row >= 0 && col >= 0 && row < rows && col < cols;

  coverMatrix[rStart][cStart] = true;
  retval.push([rStart, cStart]);
  remainingCount--;

  let steps = 1; // Initialize the step size
  let direction = 0; // Start moving to the right (first direction)

  while (remainingCount > 0) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < steps; j++) {
        rStart += directions[direction][0];
        cStart += directions[direction][1];

        if (isValid(rStart, cStart) && !coverMatrix[rStart][cStart]) {
          coverMatrix[rStart][cStart] = true;
          retval.push([rStart, cStart]);
          remainingCount--;
        }
      }
      direction = (direction + 1) % 4;
    }
    steps++;
  }

  return retval;
};