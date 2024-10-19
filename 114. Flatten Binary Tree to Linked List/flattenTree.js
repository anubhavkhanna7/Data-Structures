
var flatten = function (root) {
  if (!root) return;

  let temp = root.right;
  root.right = null

  if (root.left) {
    root.right = root.left;
    root.left = null;
    flatten(root.right);
  }

  while (root.right) {
    root = root.right;
  }

  root.right = temp;
  flatten(temp)
};
