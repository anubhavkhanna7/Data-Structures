var isSymmetric = function(root) {
  if (root === null) return true

  return checkIfSymmetric(root.left, root.right)
};

const checkIfSymmetric = (leftNode, rightNode) => {
  // if both nodes are null, return true
  if (!leftNode && !rightNode) return true

  if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false

  let leftCheck = checkIfSymmetric(leftNode.left, rightNode.right)
  let rightCheck = checkIfSymmetric(leftNode.right, rightNode.left)
  
  return leftCheck && rightCheck
}