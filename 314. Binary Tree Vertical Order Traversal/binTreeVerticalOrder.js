var verticalOrder = function (root) {
  if (!root) return []
  let map = new Map(), leastIndex = 0, retval = []

  const queue = [[root, 0]]

  while (queue.length > 0) {
    const [node, index] = queue.shift()
    if (!map.has(index)) map.set(index, [])
    leastIndex = Math.min(leastIndex, index)
    map.get(index).push(node.val)

    if (node.left) queue.push([node.left, index - 1])
    if (node.right) queue.push([node.right, index + 1])
  }

  while (map.has(leastIndex)) {
    retval.push(map.get(leastIndex))
    leastIndex++
  }

  return retval
};