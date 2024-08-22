var kthSmallest = function(root, k) {
  let smallest = null, count = k
  const findSmallest = (node) => {
      if (smallest !== null || !node) return
      findSmallest(node.left)
      count--
      if (count === 0) {
          smallest = node.val
          return
      }
      findSmallest(node.right)
  }
  findSmallest(root)
  return smallest
};