var cloneGraph = function(node) {
  if (node == null) return null

  let nodeList = new Map()
  let visited = new Set()
  let queue = [node]

  const addNode = (currentNode) => {
      let newNode = new _Node(currentNode.val, [])
      nodeList.set(currentNode.val, newNode)
  }

  while (queue.length) {
      let currentNode = queue.shift()
      if (visited.has(currentNode.val)) continue;

      visited.add(currentNode.val)
      if (!nodeList.has(currentNode.val)) addNode(currentNode)

      for(neighbor of currentNode.neighbors) {
          if (!nodeList.has(neighbor.val)) addNode(neighbor)
          let neighborNode = nodeList.get(neighbor.val)

          let parent = nodeList.get(currentNode.val)
          parent.neighbors.push(neighborNode)
          queue.push(neighbor)
      }
  }

  return nodeList.get(1)
};