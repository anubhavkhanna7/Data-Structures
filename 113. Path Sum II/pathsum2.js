var pathSum = function (root, targetSum) {
  if (root === null) return []

  const retval = []

  const traverse = (node, target, traversalArray) => {
    if (!node.left && !node.right && target === 0) {
      retval.push(traversalArray)
      return
    }

    if (node.left) traverse(node.left, target - (node.left.val), [...traversalArray, node.left.val])
    if (node.right) traverse(node.right, target - (node.right.val), [...traversalArray, node.right.val])
  }

  traverse(root, targetSum - root.val, [root.val])

  return retval
};