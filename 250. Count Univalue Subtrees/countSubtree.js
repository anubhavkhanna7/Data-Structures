var countUnivalSubtrees = function(root) {
  if (!root) return 0
  if (!(root.left || root.right)) return 1

  let retval = 0
  
  const traverse = (node) => {
      if (!node.left && !node.right) {
          retval++
          return [node.val]
      }
      
      let left = [], right = []
      if (node.left) {
          left = traverse(node.left)
      }
      
      if (node.right) {
          right = traverse(node.right)
      }
      
      let returnVal = [...left, node.val, ...right]
      let retSet = new Set(returnVal)
      
      if (retSet.size === 1) retval++
      
      return returnVal
  }
  
  traverse(root)
  return retval
};