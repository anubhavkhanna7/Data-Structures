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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root.left && !root.right) return [root.val]

  let queue = [root], retval = []
  while (queue.length) {
    let queuelen = queue.length

    let sum = 0

    for (let i = 0; i < queuelen; i++) {
      let node = queue.shift()
      sum += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    retval.push(sum / queuelen)
  }

  return retval
};