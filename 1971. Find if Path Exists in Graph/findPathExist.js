var validPath = function(n, edges, source, destination) {
  if (source === destination) return true
  let doesPathExist = false
  
  let adjacencyGraph = new Map()
  let visited = new Set()
  
  for ([start, end] of edges) {
      if (!adjacencyGraph.has(start)) adjacencyGraph.set(start, [])
      if (!adjacencyGraph.has(end)) adjacencyGraph.set(end, [])
      
      adjacencyGraph.get(start).push(end)
      adjacencyGraph.get(end).push(start)
  }

  const traverse = (node) => {
      if (visited.has(node)) return false
      if (destination === node || doesPathExist) return true
      
      visited.add(node)
      
      let queue = adjacencyGraph.get(node) || []
      for (let i = 0; i<queue.length; i++) {
          if (traverse(queue[i])) return true
      } 
          
      return false
  }
  
  return traverse(source)
};