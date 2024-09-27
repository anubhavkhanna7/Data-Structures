var validTree = function(n, edges) {
  if (edges.length !== n - 1) return false;

  let adjacencyList = new Map();
  for (let [start, end] of edges) {
      if (!adjacencyList.has(start)) adjacencyList.set(start, []);
      if (!adjacencyList.has(end)) adjacencyList.set(end, []);
      adjacencyList.get(start).push(end);
      adjacencyList.get(end).push(start);
  }

  let visited = new Array(n).fill(false);    
  const dfs = (node, parent) => {
      visited[node] = true;
      
      for (let neighbor of adjacencyList.get(node) || []) {
          if (neighbor === parent) continue;
          if (visited[neighbor] || !dfs(neighbor, node)) return false;
      }
      return true;
  };
  if (!dfs(0, -1)) return false;
  return visited.every(v => v);
};