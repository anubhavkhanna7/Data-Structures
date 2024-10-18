/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function (x, y, target) {
  if (x + y === target) return true

  [x, y] = [Math.min(x, y), Math.max(x, y)]

  let visited = new Set()
  const visitedKey = (i, j) => `${i}-${j}`

  let queue = [[0, 0]]
  while (queue.length > 0) {
    let [con1, con2] = queue.shift()
    if (con1 === target || con2 === target || (con1 + con2) === target) {
      return true
    }
    if (visited.has(visitedKey(con1, con2))) break
    visited.add(visitedKey(con1, con2))

    if (con2 === y) con2 = 0

    if (con1 === 0) {
      con1 += x
    } else {
      let availableSpaceIn2 = y - con2, prevCon1 = con1
      con1 = availableSpaceIn2 >= con1 ? 0 : con1 - availableSpaceIn2
      con2 = availableSpaceIn2 >= prevCon1 ? con2 + prevCon1 : con2 + availableSpaceIn2
    }

    queue.push([con1, con2])
  }

  return false
};