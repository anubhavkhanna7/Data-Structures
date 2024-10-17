var countBattleships = function (board) {
  let count = 0
  let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]

  const isValid = (i, j) => i >= 0 && j >= 0 && i < board.length && j < board[0].length && board[i][j] === "X"

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'X') {
        count++
        let queue = [[i, j]]
        while (queue.length > 0) {
          let [row, col] = queue.shift()
          board[row][col] = '.'

          for ([dx, dy] of directions) {
            if (isValid(dx + row, dy + col)) queue.push([row + dx, col + dy])
          }
        }
      }
    }
  }

  return count
};

// Follow Up
var countBattleships = function (board) {
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'X') {
        if (i > 0 && board[i - 1][j] === 'X') continue;
        if (j > 0 && board[i][j - 1] === 'X') continue;
        count++;
      }
    }
  }

  return count;
};