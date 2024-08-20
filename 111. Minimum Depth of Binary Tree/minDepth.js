var minDepth = function(root) {
  if (root === null) return 0
  if (!root.left && !root.right) return 1
  let min = Infinity;

  const traverse = (node, currentCount = 0) => {
      if (!node.left && !node.right) {
          if(currentCount+1 < min) {
              min = currentCount+1
          }
      }

      if(node.left) traverse(node.left, currentCount +1)
      if(node.right) traverse(node.right, currentCount +1)
  }
  traverse(root)

  return min
};