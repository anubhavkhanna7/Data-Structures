var maxPathSum = function (root) {
  let globalMax = -Infinity;

  function traverse(node) {
    if (!node) return 0;

    let leftSum = Math.max(traverse(node.left), 0);
    let rightSum = Math.max(traverse(node.right), 0);

    let localMax = node.val + leftSum + rightSum;
    globalMax = Math.max(globalMax, localMax);

    return node.val + Math.max(leftSum, rightSum);
  }

  traverse(root);
  return globalMax;
};