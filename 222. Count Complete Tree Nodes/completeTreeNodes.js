// Less than O(n) complexity

var countNodes = function(root) {
  if (root === null) return 0
  if (!root.left && !root.right) return 1

  let leftDep = findLeftDepth(root)
  let rightDep = findRightDepth(root)

  if (leftDep === rightDep) {
      return Math.pow(2, leftDep) -1
  } else {
      return 1 + countNodes(root.left) + countNodes(root.right)
  }
};

const findLeftDepth = (node) => {
  let count = 0
  while (node) {
      count++
      node = node.left
  }
  return count
}

const findRightDepth = (node) => {
  let count = 0
  while (node) {
      count++
      node = node.right
  }
  return count
}

// O(n) Complexity

var countNodes = function(root) {
    if (root === null) return 0
    return 1 + countNodes(root.left) + countNodes(root.right)
};
