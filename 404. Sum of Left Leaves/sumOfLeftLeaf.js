var sumOfLeftLeaves = function(root, isLeft = false) {
  if (!root) return 0

  let sum = isLeft && !root.left && !root.right? root.val : 0
  return sum + sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
}