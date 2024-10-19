var longestConsecutive = function (root) {
  let longestPathLength = 1

  const traverse = (node, currentPathLength) => {
    longestPathLength = Math.max(longestPathLength, currentPathLength)
    if (!node || (!node.left && !node.right)) return

    const val = node.val
    if (node.left) traverse(node.left, node.left.val === val + 1 ? currentPathLength + 1 : 1)
    if (node.right) traverse(node.right, node.right.val === val + 1 ? currentPathLength + 1 : 1)
  }

  traverse(root, 1)

  return longestPathLength
};