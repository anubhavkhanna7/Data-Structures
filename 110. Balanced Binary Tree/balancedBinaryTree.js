var isBalanced = function(root) {
  const checkBalance = (node) => {
      if (!node) return 0;

      let leftDepth = checkBalance(node.left);
      let rightDepth = checkBalance(node.right);

      // If the subtree is imbalanced, return -1
      if (leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) {
          return -1;
      }

      // Return the height of the current subtree
      return Math.max(leftDepth, rightDepth) + 1;
  };

  // Start from the root and check if the tree is balanced
  return checkBalance(root) !== -1;
};