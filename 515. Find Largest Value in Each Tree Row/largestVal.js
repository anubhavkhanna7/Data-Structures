var largestValues = function (root) {
  if (root === null) return []
  let queue = [root], retval = []

  while (queue.length > 0) {
    const queueLen = queue.length
    let maxVal = -Infinity

    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift()
      maxVal = Math.max(maxVal, node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    retval.push(maxVal)
  }

  return retval
};