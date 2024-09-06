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

var findTarget = function(root, k) {
  let set = new Set();

  const traversal = (node) => {
      if (!node) return false;
      if (set.has(node.val)) return true;
      
      set.add(k - node.val);

      return traversal(node.left) || traversal(node.right);
  };

  return traversal(root);
};