var upsideDownBinaryTree = function (root) {
  if (!root || (!root.left && !root.right)) return root;

  const newHead = upsideDownBinaryTree(root.left);

  root.left.left = root.right;
  root.left.right = root;

  root.left = null;
  root.right = null;

  return newHead;
};
