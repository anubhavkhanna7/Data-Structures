var largestPathValue = function (colors, edges) {
  const n = colors.length;
  const adj = new Array(n).fill(0).map(() => []);
  const indegree = new Array(n).fill(0);

  for (const [u, v] of edges) {
    adj[u].push(v);
    indegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < n; i++) {
    // Gives the start point for the graph
    if (indegree[i] === 0) queue.push(i);
  }

  const colorCount = Array.from({ length: n }, () => new Array(26).fill(0));
  let visitedNodes = 0;
  let maxColorValue = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    visitedNodes++;

    const colorIndex = colors.charCodeAt(node) - 97; // 'a' -> 0, 'b' -> 1, etc.
    colorCount[node][colorIndex]++;
    maxColorValue = Math.max(maxColorValue, colorCount[node][colorIndex]);

    for (const neighbor of adj[node]) {
      for (let i = 0; i < 26; i++) {
        colorCount[neighbor][i] = Math.max(colorCount[neighbor][i], colorCount[node][i]);
      }
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return visitedNodes === n ? maxColorValue : -1;
};
