var calcEquation = function (equations, values, queries) {
  let directPathGraph = new Map(), counter = 0
  let pathList = new Map()

  const returnKey = (start, end) => `${start}-${end}`

  for (let [start, end] of equations) {
    if (!pathList.has(start)) pathList.set(start, [])
    if (!pathList.has(end)) pathList.set(end, [])

    pathList.get(start).push([end, values[counter]])
    pathList.get(end).push([start, 1 / values[counter]])

    const startKey = returnKey(start, end)
    const endKey = returnKey(end, start)

    directPathGraph.set(startKey, values[counter])
    directPathGraph.set(endKey, 1 / values[counter])
    counter++
  }

  let retval = []

  const traverseGraphAndReturnVal = (startPoint, endPoint) => {
    let visited = new Set([startPoint]), queue = [[startPoint, 1]]

    while (queue.length) {
      let [start, value] = queue.shift()

      if (start === endPoint) return value

      for (path of pathList.get(start)) {
        if (!visited.has(path[0])) {
          visited.add(path[0])
          queue.push([path[0], path[1] * value])
        }
      }
    }

    return -1
  }

  for (let i = 0; i < queries.length; i++) {
    if (!pathList.has(queries[i][0]) || !pathList.has(queries[i][1])) {
      retval.push(-1)
    } else if (queries[i][0] === queries[i][1]) {
      retval.push(1)
    } else {
      const key = returnKey(queries[i][0], queries[i][1])
      if (directPathGraph.has(key)) {
        retval.push(directPathGraph.get(key))
      } else {
        retval.push(traverseGraphAndReturnVal(queries[i][0], queries[i][1]))
      }
    }
  }

  return retval

};