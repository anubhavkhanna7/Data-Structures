var flipEquiv = function(root1, root2) {
  if (!root1 && !root2) return true
  if (!root1 || !root2 || root1.val !== root2.val) return false

  const flip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)
  const noFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)

  return flip || noFlip
};