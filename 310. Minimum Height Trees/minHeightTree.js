var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  let adjacencyGraph = new Map();

  for (let [start, end] of edges) {
    if (!adjacencyGraph.has(start)) adjacencyGraph.set(start, []);
    if (!adjacencyGraph.has(end)) adjacencyGraph.set(end, []);
    adjacencyGraph.get(start).push(end);
    adjacencyGraph.get(end).push(start);
  }

  let leaves = [];
  for (let [node, neighbors] of adjacencyGraph.entries()) {
    if (neighbors.length === 1) leaves.push(node);
  }

  while (n > 2) {
    n -= leaves.length;
    let newLeaves = [];

    for (let leaf of leaves) {
      let neighbor = adjacencyGraph.get(leaf).pop();
      adjacencyGraph.get(neighbor).splice(adjacencyGraph.get(neighbor).indexOf(leaf), 1);

      if (adjacencyGraph.get(neighbor).length === 1) newLeaves.push(neighbor);
    }

    leaves = newLeaves;
  }

  return leaves;
};
