
var connect = function (root) {
  if (!root) return root
  let queue = [root]

  while (queue.length) {
    let prev = null, queueLen = queue.length

    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift()
      if (prev !== null) {
        prev.next = node
      }
      prev = node

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    prev.next = null

  }

  return root
};
