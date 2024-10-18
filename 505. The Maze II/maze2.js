/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  const m = maze.length, n = maze[0].length
  const availableDirections = {
    'L': [0, -1],
    'R': [0, 1],
    'T': [-1, 0],
    'B': [1, 0],
  }
  const getKey = (i, j, dir) => `${i}-${j}-${dir}`
  const visited = new Set()
  const isValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n && maze[i][j] === 0
  const [drow, dcol] = destination
  const isBoundary = (i, j) => i >= m || j >= n || i < 0 || j < 0 || maze[i][j] === 1

  let queue = []
  for (key of Object.keys(availableDirections)) {
    visited.add(getKey(start[0], start[1], key))
    const [dx, dy] = availableDirections[key]
    if (isValid(start[0] + dx, start[1] + dy)) {
      queue.push([start[0] + dx, start[1] + dy, key, 0])
    }
  }


  while (queue.length > 0) {
    const [row, col, direction, steps] = queue.shift()
    if (visited.has(getKey(row, col, direction))) continue

    visited.add(getKey(row, col, direction))

    const [dx, dy] = availableDirections[direction]
    if (row === drow && col === dcol && isBoundary(row + dx, col + dy)) return steps + 1

    if (isBoundary(row + dx, col + dy)) {
      // check all directions
      for (key of Object.keys(availableDirections)) {
        const [nx, ny] = availableDirections[key]
        if (!isBoundary(row + nx, col + ny, key) && !visited.has(getKey(row + nx, col + ny, key))) {
          queue.push([row + nx, col + ny, key, steps + 1])
        }
      }
    } else {
      queue.push([row + dx, col + dy, direction, steps + 1])
    }

  }

  return -1
};
