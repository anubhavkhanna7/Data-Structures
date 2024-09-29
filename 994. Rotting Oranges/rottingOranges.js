var orangesRotting = function (grid) {
  let freshCount = 0;
  let queue = []

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) freshCount++
      if (grid[i][j] === 2) queue.push([i, j])
    }
  }

  if (!freshCount) return 0

  let totalTimeElapsed = 0

  let visited = new Set()

  const returnIndexKey = (i, j) => {
    return `${i}-${j}`
  }

  const returnIndexValid = (i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || visited.has(returnIndexKey(i, j))) return false

    return grid[i][j] === 1
  }

  while (queue.length) {
    let queueLen = queue.length
    let isFreshOrangeFound = false

    for (let i = 0; i < queueLen; i++) {
      let row = queue[i][0]
      let col = queue[i][1]
      grid[row][col] = 2

      if (returnIndexValid(row + 1, col)) {
        queue.push([row + 1, col])
        visited.add(returnIndexKey(row + 1, col))

        isFreshOrangeFound = true
        freshCount--
      }
      if (returnIndexValid(row - 1, col)) {
        queue.push([row - 1, col])
        visited.add(returnIndexKey(row - 1, col))

        isFreshOrangeFound = true
        freshCount--
      }
      if (returnIndexValid(row, col + 1)) {
        queue.push([row, col + 1])
        visited.add(returnIndexKey(row, col + 1))
        isFreshOrangeFound = true
        freshCount--
      }
      if (returnIndexValid(row, col - 1)) {
        queue.push([row, col - 1])
        visited.add(returnIndexKey(row, col - 1))
        isFreshOrangeFound = true
        freshCount--
      }
    }

    if (isFreshOrangeFound) totalTimeElapsed++
    queue = queue.slice(queueLen)
  }

  return freshCount === 0 ? totalTimeElapsed : -1
};