var treeQueries = function (root, queries) {
  const depthMap = new Map();
  const removalDepthMap = new Map();

  const traverseForDepth = (node) => {
    if (!node) return -1;

    let leftDepth = traverseForDepth(node.left) + 1;
    let rightDepth = traverseForDepth(node.right) + 1;

    const maxDepth = Math.max(leftDepth, rightDepth);
    depthMap.set(node.val, maxDepth);
    return maxDepth;
  };

  const traversalForRemovalDepth = (node, parentDepth, currentDepth) => {
    if (!node) return;

    // Calculate the maximum depth after removing this node
    removalDepthMap.set(node.val, parentDepth);

    let leftChildDepth = node.right ? Math.max(parentDepth, depthMap.get(node.right.val) + currentDepth + 1) : Math.max(currentDepth, parentDepth);
    let rightChildDepth = node.left ? Math.max(parentDepth, depthMap.get(node.left.val) + currentDepth + 1) : Math.max(currentDepth, parentDepth);

    traversalForRemovalDepth(node.left, leftChildDepth, currentDepth + 1);
    traversalForRemovalDepth(node.right, rightChildDepth, currentDepth + 1);
  };

  traverseForDepth(root);
  traversalForRemovalDepth(root, 0, 0);

  const retval = [];
  for (const rootNode of queries) {
    retval.push(removalDepthMap.get(rootNode) || 0);
  }

  return retval;
};

