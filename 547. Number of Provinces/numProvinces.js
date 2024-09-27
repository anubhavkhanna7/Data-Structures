var findCircleNum = function (isConnected) {
  if (isConnected.length === 1) return 1
  let map = new Map()

  let visited = new Set()

  let retval = 0

  // convert to adjacency list
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[0].length; j++) {
      if (i === j) continue;

      if (isConnected[i][j]) {
        map.set(i, [...(map.get(i) || []), j])
      }

      if (!map.has(i)) {
        map.set(i, [])
      }
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    if (visited.has(i)) continue;
    let stack = [i]
    retval++
    while (stack.length) {
      const visitedIndex = stack.pop()
      visited.add(visitedIndex)
      let connectedNodes = map.get(visitedIndex).filter(ele => !visited.has(ele))
      stack.push(...connectedNodes)
    }
  }

  return retval
};


var findCircleNum = function (isConnected) {
  if (isConnected.length === 1) return 1
  let visited = new Set()
  let retval = 0

  let traverse = (index) => {
    visited.add(index)
    for (let i = 0; i < isConnected.length; i++) {
      if (i === index) continue;

      if (isConnected[index][i] && !visited.has(i)) {
        traverse(i)
      }
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    if (visited.has(i)) continue;
    retval++
    traverse(i)
  }

  return retval
};