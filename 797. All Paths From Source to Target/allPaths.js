var allPathsSourceTarget = function(graph) {
  if (graph.length === 2) return [[0,1]]
  const destination = graph.length-1

  let retval = []

  const traverse = (node = 0, path = []) => {
      if (node === destination) {
          retval.push([...path, node])
          return
      }

      for(let index of graph[node]) {
          traverse(index, [...path, node])
      }
  }

  traverse(0,[])

  return retval
};