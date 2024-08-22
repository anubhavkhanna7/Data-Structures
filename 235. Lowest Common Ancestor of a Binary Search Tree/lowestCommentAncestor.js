var lowestCommonAncestor = function(root, p, q) {
  let [smallBound, largeBound] = p.val < q.val ?  [p,q] : [q,p]

  const findAncestor = (node) => {
      if (node.val === smallBound.val || node.val === largeBound.val || (node.val > smallBound.val && node.val < largeBound.val)) return node

      if (node.val < smallBound.val) return findAncestor(node.right)
      if (node.val > largeBound.val) return findAncestor(node.left)
  }

  return findAncestor(root)
};
