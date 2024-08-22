var preorderTraversal = function (root) {
  let allNodes = [];
  traversal(root,allNodes);
  return allNodes;
};

var traversal = function (node,allNodes) {
  if (node != null) {
      allNodes.push(node.val);
  } else {
      return;
  }
  traversal(node.left, allNodes);
  traversal(node.right, allNodes);
}