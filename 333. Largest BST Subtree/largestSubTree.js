var largestBSTSubtree = function (root) {
  let maxBSTSize = 0;

  const traverse = (node) => {
    if (!node) return { isBST: true, size: 0, min: Infinity, max: -Infinity };

    const left = traverse(node.left);
    const right = traverse(node.right);

    if (left.isBST && right.isBST && node.val > left.max && node.val < right.min) {
      const size = left.size + right.size + 1;
      maxBSTSize = Math.max(maxBSTSize, size);

      return {
        isBST: true,
        size: size,
        min: Math.min(left.min, node.val),
        max: Math.max(right.max, node.val)
      };
    } else {
      return { isBST: false, size: 0, min: -Infinity, max: Infinity };
    }
  };

  traverse(root);
  return maxBSTSize;
};
