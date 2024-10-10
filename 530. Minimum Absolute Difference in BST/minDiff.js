var getMinimumDifference = function (root) {
  if (!root) return 0
  let minDiff = Infinity

  const findDiff = (node, nodeMax, nodeMin) => {
    if (!node) return

    if (nodeMax !== Infinity) {
      minDiff = Math.min(minDiff, Math.abs(nodeMax - node.val))
    }

    if (nodeMin !== Infinity) {
      minDiff = Math.min(minDiff, Math.abs(nodeMin - node.val))
    }

    if (node.left) {
      findDiff(node.left, node.val, nodeMin)
    }

    if (node.right) {
      findDiff(node.right, nodeMax, node.val)
    }
  }

  findDiff(root, Infinity, -Infinity)

  return minDiff
};
