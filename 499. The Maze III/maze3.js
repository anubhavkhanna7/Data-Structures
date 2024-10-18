/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
var findShortestWay = function (maze, start, destination) {
  const m = maze.length, n = maze[0].length
  const availableDirections = {
    'l': [0, -1],
    'r': [0, 1],
    'u': [-1, 0],
    'd': [1, 0],
  }
  const getKey = (i, j, dir) => `${i}-${j}-${dir}`
  const visited = new Map()
  const isValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n && maze[i][j] === 0
  const [drow, dcol] = destination
  const isBoundary = (i, j) => i >= m || j >= n || i < 0 || j < 0 || maze[i][j] === 1

  let queue = []
  for (key of Object.keys(availableDirections)) {
    visited.set(getKey(start[0], start[1], key), 0)
    const [dx, dy] = availableDirections[key]
    if (isValid(start[0] + dx, start[1] + dy)) {
      queue.push([start[0] + dx, start[1] + dy, key, key, 1])
    }
  }

  const retval = []

  while (queue.length > 0) {
    const [row, col, direction, directionsTaken, stepsTaken] = queue.shift()
    if ((visited.has(getKey(row, col, direction)) && visited.get(getKey(row, col, direction)) < stepsTaken) && !(row === drow && col === dcol)) continue

    visited.set(getKey(row, col, direction), stepsTaken)

    const [dx, dy] = availableDirections[direction]
    if (row === drow && col === dcol) {
      retval.push([directionsTaken, stepsTaken])
      continue
    }

    if (isBoundary(row + dx, col + dy)) {
      // check all directions
      for (key of Object.keys(availableDirections)) {
        const [nx, ny] = availableDirections[key]
        if (isValid(row + nx, col + ny) && !isBoundary(row + nx, col + ny, key) && visited.has(getKey(row, col, direction)) && visited.get(getKey(row, col, direction)) >= stepsTaken) {
          queue.push([row + nx, col + ny, key, direction === key ? directionsTaken : directionsTaken + key, stepsTaken + 1])
        }
      }
    } else {
      queue.push([row + dx, col + dy, direction, directionsTaken, stepsTaken + 1])
    }
  }

  if (retval.length == 0) return 'impossible'
  retval.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }
    return a[1] - b[1];
  });

  return retval[0][0]
};
