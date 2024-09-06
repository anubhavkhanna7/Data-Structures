var findTarget = function(root, k) {
  let set = new Set(), isTargetPresent = false

  const traversal = (node) => {
      if (isTargetPresent || !node) return
      if (set.has(node.val)) {
          isTargetPresent = true
          return
      }
      set.add(k-node.val)
      traversal(node.left)
      traversal(node.right)
  }

  traversal(root)
  return isTargetPresent
};