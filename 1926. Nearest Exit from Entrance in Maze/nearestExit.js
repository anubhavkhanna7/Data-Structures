/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const m = maze.length, n = maze[0].length

  const isCellAnExitPoint = (i, j) => (i === 0 || j === 0 || i === m - 1 || j === n - 1) && (i !== entrance[0] || j !== entrance[1]);
  const isCellValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n && maze[i][j] !== '+'
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  let queue = [[entrance, 0]]
  maze[entrance[0]][entrance[1]] = '+'

  while (queue.length) {
    let [currentPosition, stepsTaken] = queue.shift()
    const [row, col] = currentPosition
    if (isCellAnExitPoint(row, col)) return stepsTaken

    maze[row][col] = '+'
    for (let i = 0; i < directions.length; i++) {
      const newX = row + directions[i][0]
      const newY = col + directions[i][1]
      if (isCellValid(newX, newY)) {
        if (isCellAnExitPoint(newX, newY)) {
          return stepsTaken + 1;
        }

        maze[newX][newY] = '+';
        queue.push([[newX, newY], stepsTaken + 1]);
      }
    }
  }

  return -1
};