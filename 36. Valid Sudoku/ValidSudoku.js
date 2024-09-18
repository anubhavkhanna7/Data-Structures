var isValidSudoku = function(board) {
  let isValidSudoku = true
  const validateSquare = (i, j) => {
      let set = new Set()
      for (let row = i; row < i+3; row++) {
          isCopyFound = false
          for (let column = j; column < j+3; column++) {
              if (board[row][column] !== '.') {
                  if (set.has(board[row][column])) {
                      isCopyFound = true
                      break
                  } else {
                      set.add(board[row][column])
                  }
              }
          }
          if (isCopyFound) {
              isValidSudoku = false
              break
          }
      }
  }

  const validateRow = (i) => {
      let set = new Set()
      for(let j = 0; j< 9; j++) {
          if(board[i][j] !== '.') {
              if (set.has(board[i][j])) {
                  isValidSudoku = false
                  break;
              } else {
                  set.add(board[i][j])
              }
          }
      }
  }

  const validateColumn = (j) => {
      let set = new Set()
      for(let i = 0; i< 9; i++) {
          if(board[i][j] !== '.') {
              if (set.has(board[i][j])) {
                  isValidSudoku = false
                  break;
              } else {
                  set.add(board[i][j])
              }
          }
      }
  }

  for (let i = 0; i<9; i++) {
      validateRow(i)

      if (!isValidSudoku) break
      
      for (let j = 0; j<9; j++) {
          if(i%3 === 0 && j%3 === 0) {
              validateSquare(i,j)
          }
          validateColumn(j)

          if (!isValidSudoku) break
      }
  }

  return isValidSudoku
};