var solve = function(board) {
  for (let r = 0; r< board.length; r++) {
      for (let c = 0; c< board[0].length; c++) {
          if (r === 0 || r === board.length-1) {
              captureBoard(board, r, c)
          } else if (c === 0 || c === board[0].length-1) {
              captureBoard(board, r, c)
          }
      }
  }

  for (let r = 0; r< board.length; r++) {
      for (let c = 0; c< board[0].length; c++) {
          if (board[r][c] === 'S') {
              board[r][c] = 'O'
          } else {
              board[r][c] = 'X'
          }
      }
  }

  return board;
};

const captureBoard = (board, row, column) => {
  // if region is out of bounds, return
  if (row <0 || row >= board.length) return
  if (column <0 || column >= board[0].length) return

  // check if the region is already captured or saved, then return
  if (board[row][column] === 'X' || board[row][column] === 'S') return

  board[row][column] = 'S'
  captureBoard(board, row+1, column)
  captureBoard(board, row-1, column)
  captureBoard(board, row, column+1)
  captureBoard(board, row, column-1)
}
