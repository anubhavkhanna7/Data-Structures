var distanceK = function (root, target, k) {
  const parentMap = new Map();

  const mapParents = (node, parent = null) => {
    if (!node) return;
    if (parent) parentMap.set(node, parent);
    mapParents(node.left, node);
    mapParents(node.right, node);
  };
  mapParents(root);

  const result = [];
  const queue = [[target, 0]];
  const visited = new Set();
  visited.add(target);

  while (queue.length > 0) {
    const [node, dist] = queue.shift();

    if (dist === k) result.push(node.val);

    const neighbors = [node.left, node.right, parentMap.get(node)];
    for (const neighbor of neighbors) {
      if (neighbor && !visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }

  return result;
};
