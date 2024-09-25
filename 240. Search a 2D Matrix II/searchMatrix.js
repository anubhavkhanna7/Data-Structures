var searchMatrix = function(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  
  // Start from the top-right corner
  let row = 0;
  let col = cols - 1;
  
  while (row < rows && col >= 0) {
      if (matrix[row][col] === target) {
          return true;
      } else if (matrix[row][col] > target) {
          // Move left
          col--;
      } else {
          // Move down
          row++;
      }
  }
  
  return false;
};