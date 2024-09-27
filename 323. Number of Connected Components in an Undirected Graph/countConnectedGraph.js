var countComponents = function(n, edges) {
  let retval = 0
  let adjacencyGraph = new Map()
  let visited = new Array(n).fill(false)

  for(let [start, end] of edges) {
      if (!adjacencyGraph.has(start)) adjacencyGraph.set(start, [])
      if (!adjacencyGraph.has(end)) adjacencyGraph.set(end, [])
      adjacencyGraph.get(start).push(end)
      adjacencyGraph.get(end).push(start)
  }

  const traverseGraph = (currentNode, parentNode) => {
      for(nextNode of adjacencyGraph.get(currentNode) || []) {
          if (visited[nextNode] || nextNode === parentNode) continue;
          visited[nextNode] = true
          traverseGraph(nextNode, currentNode)
      }
  }

  for(let i = 0; i< n; i++) {
      if (visited[i]) continue;
      retval++
      traverseGraph(i, -1)
  }

  return retval
};