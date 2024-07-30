var maxDepth = function(root) {
  if (root === null) return 0
  const ldep = maxDepth(root.left)
  const rdep = maxDepth(root.right)
  return ldep>rdep ? ldep+1 : rdep+1;
};
