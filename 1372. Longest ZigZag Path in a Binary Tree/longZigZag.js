var longestZigZag = function (root) {
  if (!root.left && !root.right) return 0
  let maxLength = 0

  const traverse = (node, prevDirection, currentCount) => {
    if (!node) return

    maxLength = Math.max(maxLength, currentCount)

    if (prevDirection === '' || prevDirection === 'R') {
      traverse(node.left, 'L', currentCount + 1)
      traverse(node.right, 'R', 1)
    }

    if (prevDirection === '' || prevDirection === 'L') {
      traverse(node.right, 'R', currentCount + 1)
      traverse(node.left, 'L', 1)
    }
  }

  traverse(root, '', 0)

  return maxLength
};