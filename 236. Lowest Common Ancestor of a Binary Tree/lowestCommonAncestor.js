var lowestCommonAncestor = function(root, p, q) {
  if (!root || root.val === p.val || root.val === q.val ) return root
  
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  return left && right ? root : left || right
};