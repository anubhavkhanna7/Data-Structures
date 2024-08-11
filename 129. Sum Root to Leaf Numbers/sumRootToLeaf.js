var sumNumbers = function(root, sum = 0) {
  if (root.left === null && root.right === null) {
      return sum*10 + root.val
  }
  let leftSum = 0, rightSum = 0

  if (root.left) {
      leftSum = sumNumbers(root.left, sum*10 + root.val)
  }

  if (root.right) {
      rightSum = sumNumbers(root.right, sum*10 + root.val)
  }

  return leftSum + rightSum
};
