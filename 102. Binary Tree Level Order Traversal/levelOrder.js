var levelOrder = function(root) {
  if (!root) return []
  let retval = [], queue = [], current = [], currentLevel = 0
  queue.push([root, 0])

  while(queue.length) {
      let node = queue.shift()
      if (node[1] === currentLevel) {
          current.push(node[0].val)
      } else {
          retval.push(current)
          current = [node[0].val]
          currentLevel = node[1]
      }

      if (node[0].left) queue.push([node[0].left, node[1] + 1])
      if (node[0].right) queue.push([node[0].right, node[1] + 1])
  }
  
  if (current.length > 0) retval.push(current)

  return retval
};