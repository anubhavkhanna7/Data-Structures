/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  const parentChildSumWithLevel = new Map()
  let queue = [root], level = 0

  while (queue.length > 0) {
    let queueLen = queue.length, sum = 0

    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift()
      sum += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    parentChildSumWithLevel.set(level, sum)
    level++
  }

  const updateChildrenValuesWithSum = (node, level, sumValue) => {
    node.val = (parentChildSumWithLevel.get(level) || 0) - sumValue
    let sum = (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0)

    if (node.left) updateChildrenValuesWithSum(node.left, level + 1, sum)
    if (node.right) updateChildrenValuesWithSum(node.right, level + 1, sum)
  }

  updateChildrenValuesWithSum(root, 0, root.val)

  return root
};