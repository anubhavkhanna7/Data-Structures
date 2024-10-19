var countPairs = function (n, edges) {
  let countOfUnreachableNodes = 0
  const adjacencyGraph = new Map()
  const visitedNodes = new Set()

  // initiate the graph
  for (let i = 0; i < n; i++) {
    adjacencyGraph.set(i, [])
  }

  // fill the graph
  for ([start, end] of edges) {
    adjacencyGraph.get(start).push(end)
    adjacencyGraph.get(end).push(start)
  }

  for (let start = 0; start < n; start++) {
    if (visitedNodes.has(start)) continue

    let queue = [start], currentlyVisited = new Set([start])
    while (queue.length > 0) {
      const node = queue.shift()

      for (nextNode of adjacencyGraph.get(node)) {
        if (!currentlyVisited.has(nextNode)) {
          queue.push(nextNode)
          currentlyVisited.add(nextNode)
        }
      }
    }
    for (visitednode of currentlyVisited) {
      visitedNodes.add(visitednode)
    }

    countOfUnreachableNodes += (currentlyVisited.size) * (n - visitedNodes.size)
  }

  return countOfUnreachableNodes
};