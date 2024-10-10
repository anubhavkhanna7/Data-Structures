var pathSum = function (root, targetSum) {
  if (!root) return 0;

  let countOfSubTree = 0;

  const traverse = (node, currentSum) => {
    if (!node) return;

    currentSum += node.val;

    if (currentSum === targetSum) {
      countOfSubTree++;
    }

    traverse(node.left, currentSum);
    traverse(node.right, currentSum);
  };

  const startFromNode = (node) => {
    if (!node) return;

    traverse(node, 0);

    startFromNode(node.left);
    startFromNode(node.right);
  };

  startFromNode(root);

  return countOfSubTree;
};