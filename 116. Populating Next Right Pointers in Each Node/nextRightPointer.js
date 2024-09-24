var connect = function(root) {
  if (!root) return root

  let queue = []
  queue.push([root, 0])

  while(queue.length) {
      let [node, level] = queue.shift()

      if (queue.length === 0 || queue[0][1] !== level) {
          node.next = null
      } else {
          node.next = queue[0][0]
      }

      if (node.left) queue.push([node.left, level+1])
      if (node.right) queue.push([node.right, level+1])
  }

  return root
};