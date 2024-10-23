var isSubPath = function (head, root) {
  if (!root) return false;
  if (!head) return true;

  return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
};

var dfs = function (head, root) {
  if (!head) return true;
  if (!root) return false;

  if (root.val !== head.val) return false;

  return dfs(head.next, root.left) || dfs(head.next, root.right);
};
