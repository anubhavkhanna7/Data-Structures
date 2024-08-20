var exist = function(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  
  const checkIfWordCanBeFormed = (row, col, index) => {
      if (index === word.length) return true;

      // check if out of bounds or no match
      if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) return false;
      
      const temp = board[row][col];
      board[row][col] = '#';
      
      const found = checkIfWordCanBeFormed(row + 1, col, index + 1) ||
                    checkIfWordCanBeFormed(row - 1, col, index + 1) ||
                    checkIfWordCanBeFormed(row, col + 1, index + 1) ||
                    checkIfWordCanBeFormed(row, col - 1, index + 1);
      
      board[row][col] = temp;
      
      return found;
  };

  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          if (checkIfWordCanBeFormed(row, col, 0)) return true;
      }
  }
  return false;
};