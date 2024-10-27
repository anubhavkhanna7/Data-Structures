var findLeaves = function (root) {
  let retval = [], collectedLeaf = []

  const collectLeafNodes = (node) => {
    if (!node) return null

    if (!node.left && !node.right) {
      collectedLeaf.push(node.val)
      return null
    }

    node.left = collectLeafNodes(node.left)
    node.right = collectLeafNodes(node.right)

    return node
  }

  while (root) {
    collectedLeaf = []
    root = collectLeafNodes(root)
    retval.push(collectedLeaf)
  }

  return retval
};