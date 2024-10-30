var minReorder = function (n, connections) {
  const adj = new Map();
  const visited = new Array(n).fill(false);
  let countOfEdgesFlipped = 0;

  for (let [start, end] of connections) {
    if (!adj.has(start)) adj.set(start, []);
    if (!adj.has(end)) adj.set(end, []);
    adj.get(start).push([end, true]);
    adj.get(end).push([start, false]);
  }

  const queue = [0];
  visited[0] = true;

  while (queue.length > 0) {
    const city = queue.shift();

    for (const [neighbor, needsReorder] of adj.get(city)) {
      if (!visited[neighbor]) {
        if (needsReorder) countOfEdgesFlipped++;
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return countOfEdgesFlipped;
};
