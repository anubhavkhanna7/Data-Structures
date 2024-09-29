var leadsToDestination = function (n, edges, start, end) {
  let adjacencyGraph = new Map();

  for (let [source, destination] of edges) {
    if (!adjacencyGraph.has(source)) adjacencyGraph.set(source, []);
    adjacencyGraph.get(source).push(destination);
  }

  let memo = new Map()

  const traverseGraph = (node, visited) => {
    if (memo.has(node)) return memo.get(node)
    if (node === end) {
      // either node is not in graph or if in graph has no other destinations
      return !adjacencyGraph.has(node) || adjacencyGraph.get(node).length === 0;
    }

    visited.add(node);

    if (adjacencyGraph.has(node)) {
      for (let neighbor of adjacencyGraph.get(node)) {
        // cycle exist
        if (visited.has(neighbor)) {
          memo.set(node, false)
          return false;
        }

        if (!traverseGraph(neighbor, visited)) {
          memo.set(node, false)
          return false;
        }
      }
    } else {
      memo.set(node, false)
      return false;
    }

    visited.delete(node);

    memo.set(node, true)
    return true;
  };

  return traverseGraph(start, new Set());
};
