/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  let m = rooms.length, n = rooms[0].length;
  let gateList = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        gateList.push([i, j]);
      }
    }
  }

  const visited = new Set()
  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]
  const returnKey = (row, col) => `${row}-${col}`
  const isValid = (row, col) => row >= 0 && col >= 0 && row < m && col < n && rooms[row][col] !== 0 && rooms[row][col] !== -1

  const traverse = (startx, starty) => {
    let queue = [[startx, starty, 0]]

    while (queue.length > 0) {
      const [row, col, currentStepsTaken] = queue.shift()
      if (rooms[row][col] > 0) {
        rooms[row][col] = Math.min(rooms[row][col], currentStepsTaken)
      }

      for ([dx, dy] of directions) {
        const newRow = row + dx
        const newCol = col + dy
        if (isValid(newRow, newCol) && !visited.has(returnKey(newRow, newCol))) {
          queue.push([newRow, newCol, currentStepsTaken + 1])
          visited.add(returnKey(newRow, newCol))
        }
      }
    }
  }

  for ([gatex, gatey] of gateList) {
    traverse(gatex, gatey)
    visited.clear()
  }


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === Infinity) {
        rooms[i][j] = -1
      }
    }
  }

  return rooms
};