var delNodes = function (root, to_delete) {
  to_delete = new Set(to_delete)
  let retval = []

  if (!to_delete.has(root.val)) retval.push(root)
  let queue = [[root, null]]
  while (queue.length) {
    let [node, prev] = queue.shift()

    if (to_delete.has(node.val)) {
      if (prev?.left && prev.left.val === node.val) prev.left = null
      if (prev?.right && prev.right.val === node.val) prev.right = null

      if (node.left && !to_delete.has(node.left.val)) retval.push(node.left)
      if (node.right && !to_delete.has(node.right.val)) retval.push(node.right)
    }

    if (node.left) queue.push([node.left, node])
    if (node.right) queue.push([node.right, node])
  }

  return retval
};