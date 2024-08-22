var isValidBST = function(root) {
  return validate(root, null, null);
};

const validate = (node, min, max) => {
  if (!node) return true;

  // Ensure the current node's value is within the allowed range
  if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      return false;
  }

  // Recursively validate the left and right subtrees
  return validate(node.left, min, node.val) && validate(node.right, node.val, max);
};