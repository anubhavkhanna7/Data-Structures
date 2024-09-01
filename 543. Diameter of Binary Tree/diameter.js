var diameterOfBinaryTree = function(root) {
  let retval = 0
  const findMaxLength = (node) => {
      if (!node) return 0

      let left = findMaxLength(node.left)
      let right = findMaxLength(node.right)

      retval = Math.max(retval, left+right)

      return Math.max(left, right) + 1
  }

  findMaxLength(root)
  return retval
};