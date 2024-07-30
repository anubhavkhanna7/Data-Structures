var goodNodes = function(root) {
  return returnGoodCount(root, root.val, 0)
};

const returnGoodCount = (node, prevHigh, count) => {
  if (node.left === null && node.right === null) {
      return node.val >= prevHigh ? count + 1 : count
  }
  let updatedCount = node.val >= prevHigh ? count + 1 : count
  if (node.left) {
      updatedCount = returnGoodCount(node.left, node.val >= prevHigh ? node.val : prevHigh, updatedCount)
  }
  if (node.right) {
      updatedCount = returnGoodCount(node.right, node.val >= prevHigh ? node.val : prevHigh, updatedCount)
  }
  return updatedCount
}