var isSameTree = function(node1, node2) {
  // check for empty nodes
  if (node1 === null && node2 === null) return true
  if ((node1 === null && node2 !== null) || (node1 !== null && node2 === null)) return false

  // check for leaf node and value equality
  if (node1.left === null && node2.left === null && node1.right === null && node2.right === null && node1.val === node2.val) return true

  // check for solo nulls
  if (node1.left === null && node2.left !== null) return false
  if (node2.left === null && node1.left !== null) return false
  if (node1.right === null && node2.right !== null) return false
  if (node2.right === null && node1.right !== null) return false

  // if not a leaf node continue going down the rabbit hole 
  if (node1.val !== node2.val) return false

  let leftCheck = true, rightCheck = true

  if (node1.left) {
      leftCheck = leftCheck && checkIfEqual(node1.left, node2.left)
  }

  if (node1.right) {
      rightCheck = rightCheck && checkIfEqual(node1.right, node2.right)
  }

  return leftCheck && rightCheck
};