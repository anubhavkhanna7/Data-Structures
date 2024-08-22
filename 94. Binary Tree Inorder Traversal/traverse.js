var inorderTraversal = function(root) {
  if (!root) return []
  if (!root.left && !root.right) return [root.val]
  let retVal = []
  const traverseNodes = (node) => {
      if (!node) return
      traverseNodes(node.left)
      retVal.push(node.val)
      traverseNodes(node.right)
  }
  traverseNodes(root)
  return retVal
};