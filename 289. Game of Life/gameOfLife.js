var gameOfLife = function(board) {
  // Each of the cells can be in either of the four states : 
  // 0 -> 0 : 0
  // 1 -> 0 : -1
  // 0 -> 1 : 2
  // 1 -> 1 : 1

  let maxI = board.length-1, maxJ = board[0].length-1

  // loop through the values to check for the values
  for (let i = 0; i<= maxI; i++) {
      for (let j = 0; j <= maxJ; j++) {
          let liveNeighours = 0

          // count live neighbours
          if (i === 0) {
              if (j === 0) {
                  if (j!== maxJ && Math.abs(board[i][j+1]) === 1) liveNeighours++
                  if (i !== maxI && Math.abs(board[i+1][j]) === 1) liveNeighours++
                  if (i !== maxI && j!== maxJ && Math.abs(board[i+1][j+1]) === 1) liveNeighours++
              } else if (j === board[0].length-1) {
                  if (j !== 0 && Math.abs(board[i][j-1]) === 1) liveNeighours++
                  if (i !== maxI && Math.abs(board[i+1][j]) === 1) liveNeighours++
                  if (j !== 0 && i !== maxI && Math.abs(board[i+1][j-1]) === 1) liveNeighours++
              } else {
                  if (i !== maxI && Math.abs(board[i+1][j]) === 1) liveNeighours++
                  if (i !== maxI && j !== 0 && Math.abs(board[i+1][j-1]) === 1) liveNeighours++
                  if (i !== maxI && j!== maxJ && Math.abs(board[i+1][j+1]) === 1) liveNeighours++
                  if (j!== maxJ && Math.abs(board[i][j+1]) === 1) liveNeighours++
                  if (j !== 0 && Math.abs(board[i][j-1]) === 1) liveNeighours++
              }
          } else if (i === board.length -1) {
              if (j === 0) {
                  if (j!== maxJ && Math.abs(board[i][j+1]) === 1) liveNeighours++
                  if (i !== 0 && Math.abs(board[i-1][j]) === 1) liveNeighours++
                  if (i !==0 && j!== maxJ && Math.abs(board[i-1][j+1]) === 1) liveNeighours++
              } else if (j === board[0].length-1) {
                  if (j!== 0 && Math.abs(board[i][j-1]) === 1) liveNeighours++
                  if (i !== 0 && Math.abs(board[i-1][j]) === 1) liveNeighours++
                  if (j!== 0 && i !== 0 && Math.abs(board[i-1][j-1]) === 1) liveNeighours++
              } else {
                  if (i !== 0 && j !== 0 && Math.abs(board[i-1][j-1]) === 1) liveNeighours++
                  if (j!== maxJ && i !== 0 && Math.abs(board[i-1][j+1]) === 1) liveNeighours++
                  if (i!==0 && Math.abs(board[i-1][j]) === 1) liveNeighours++
                  if (j!== 0 && Math.abs(board[i][j-1]) === 1) liveNeighours++
                  if (j!== maxJ && Math.abs(board[i][j+1]) === 1) liveNeighours++
              }
          } else {
              if (j === 0) {
                  if (j!== maxJ && Math.abs(board[i][j+1]) === 1) liveNeighours++
                  if (i !== 0 && Math.abs(board[i-1][j]) === 1) liveNeighours++
                  if (j!== maxJ && i!==0 && Math.abs(board[i-1][j+1]) === 1) liveNeighours++
                  if (i!== maxI && Math.abs(board[i+1][j]) === 1) liveNeighours++
                  if (j!== maxJ && i !== maxI && Math.abs(board[i+1][j+1]) === 1) liveNeighours++
              } else if (j === board[0].length-1) {
                  if (j!== 0 && Math.abs(board[i][j-1]) === 1) liveNeighours++
                  if (i !== 0 && Math.abs(board[i-1][j]) === 1) liveNeighours++
                  if (j!== 0 && i!==0 && Math.abs(board[i-1][j-1]) === 1) liveNeighours++
                  if (i!== maxI && Math.abs(board[i+1][j]) === 1) liveNeighours++
                  if (j!== 0 && i!== maxI && Math.abs(board[i+1][j-1]) === 1) liveNeighours++
              } else {
                  if (j!== 0 && Math.abs(board[i][j-1]) === 1) liveNeighours++
                  if (j!== maxJ && Math.abs(board[i][j+1]) === 1) liveNeighours++
                  if (i!== 0 && j!== 0 && Math.abs(board[i-1][j-1]) === 1) liveNeighours++
                  if (i!== 0 && Math.abs(board[i-1][j]) === 1) liveNeighours++
                  if (i!== 0 && j!== maxJ && Math.abs(board[i-1][j+1]) === 1) liveNeighours++
                  if (i!== maxI && j!== 0 && Math.abs(board[i+1][j-1]) === 1) liveNeighours++
                  if (i!== maxI && Math.abs(board[i+1][j]) === 1) liveNeighours++
                  if (i!== maxI && j!== maxJ && Math.abs(board[i+1][j+1]) === 1) liveNeighours++
              }
          }

          // calculate and set next value
          if (board[i][j]) {
              // if current cell is live
              if (liveNeighours < 2 || liveNeighours > 3) {
                  board[i][j] = -1
              }
          } else {
              // if current cell is dead
              if (liveNeighours === 3) {
                  board[i][j] = 2
              }
          }

      }
  }

  // Run a loop to normalise the values
  for (let i = 0; i<board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] === -1) {
              board[i][j] = 0
          } else if  (board[i][j] === 2) {
              board[i][j] = 1
          }
      }
  }

};