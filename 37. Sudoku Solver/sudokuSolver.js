/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const boardSize = 9
  const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const returnAvailableNumbers = (row, col) => {
    const availableNumbersSet = new Set(availableNumbers)

    // check row & column
    for (let i = 0; i < boardSize; i++) {
      const rowCellValue = board[row][i]
      const colCellValue = board[i][col]
      if (rowCellValue !== '.') availableNumbersSet.delete(Number(rowCellValue))
      if (colCellValue !== '.') availableNumbersSet.delete(Number(colCellValue))
    }

    const quadStartx = Math.floor(row / 3) * 3
    const quadStarty = Math.floor(col / 3) * 3

    // check quadrant
    for (let i = quadStartx; i < quadStartx + 3; i++) {
      for (let j = quadStarty; j < quadStarty + 3; j++) {
        const cellValue = board[i][j]
        if (cellValue !== '.') availableNumbersSet.delete(Number(cellValue))
      }
    }

    return [...availableNumbersSet]
  }

  let isBoardFilled = false

  const fillBoard = (emptySpacesToFill) => {
    if (isBoardFilled || emptySpacesToFill.length === 0) {
      isBoardFilled = true
      return
    }

    const [row, col] = emptySpacesToFill.shift()
    const availableNumbersForSpot = returnAvailableNumbers(row, col)

    if (availableNumbersForSpot.length === 0) return

    for (number of availableNumbersForSpot) {
      board[row][col] = `${number}`
      fillBoard([...emptySpacesToFill])

      if (isBoardFilled) return
      board[row][col] = '.'
    }

  }

  let emptySpots = []

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') emptySpots.push([i, j])
    }
  }

  fillBoard(emptySpots)
};