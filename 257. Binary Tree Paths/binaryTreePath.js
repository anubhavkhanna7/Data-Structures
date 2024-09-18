var binaryTreePaths = function(root) {
  let retval = []

  const findPath = (node, currPath) => {
      if (!node.left && !node.right) {
          retval.push(currPath)
          return
      }

      if (node.left) {
          let newPath = currPath + `->${node.left.val}`
          findPath(node.left, newPath)
      }

      if (node.right) {
          let newPath = currPath + `->${node.right.val}`
          findPath(node.right, newPath)
      }
  }
  findPath(root, `${root.val}`)

  return retval
};