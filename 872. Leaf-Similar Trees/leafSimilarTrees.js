var leafSimilar = function(root1, root2) {
  const nodes1 = returnLeafNodes(root1, []), nodes2 = returnLeafNodes(root2, [])
  if (nodes1.length !== nodes2.length) return false
  return nodes1.join('_') === nodes2.join('_')
};

const returnLeafNodes = (node, leafList = []) => {
  if (node.left === null && node.right === null) return [...leafList, node.val]
  let updatedList = [...leafList]
  if (node.left) {
      updatedList = returnLeafNodes(node.left, updatedList)
  }
  if (node.right) {
      updatedList = returnLeafNodes(node.right, updatedList)
  }

  return updatedList
}