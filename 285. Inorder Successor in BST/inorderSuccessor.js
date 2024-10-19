var inorderSuccessor = function (root, p) {
  if (!root) return root

  if (root.val <= p.val && !root.right) return inorderSuccessor(root.right)
  if (root.val > p.val && (!root.left || root.left.val <= p.val)) {
    const leftVal = inorderSuccessor(root.left, p)
    return leftVal === null ? root : leftVal
  }

  if (root.val <= p.val) return inorderSuccessor(root.right, p)
  if (root.left && root.left.val >= p.val) return inorderSuccessor(root.left, p)

  return null
};