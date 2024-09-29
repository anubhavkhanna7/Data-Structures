var levelOrder = function(root) {
  if (!root) return []
  let retval = []

  let queue = [root]
  while(queue.length) {  
      let queueLen = queue.length
      let levelOrderNodes = []
      for(let i = 0; i< queueLen; i++) {
          levelOrderNodes.push(queue[i].val)
          queue.push(...queue[i].children)
      }
      retval.push(levelOrderNodes)
      queue = queue.slice(queueLen)
  }

  return retval
};