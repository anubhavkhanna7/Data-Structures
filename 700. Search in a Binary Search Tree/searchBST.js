var searchBST = function(root, val) {
  if (root?.val === val || root === null) return root
  if (!root.left && !root.right) return null
  return searchBST(root.val > val ? root.left : root.right, val) 
};