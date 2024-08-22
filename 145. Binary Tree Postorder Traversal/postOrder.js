var postorderTraversal = function(root) {
  let retVal = []
  const traverse = (node) => {
      if (!node) return
      traverse(node.left)
      traverse(node.right)
      retVal.push(node.val)
  }
  traverse(root)
  return retVal
};