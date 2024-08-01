var rightSideView = function(root) {
  if (!root) return []
  if (!root.left && !root.right) return [root.val]

  let queue = [[root, 0]], rightView = [], currentLevel = 0

  while(queue.length) {
      let value = queue.shift()
      if (value[1]) {
          // check if there are no more nodes to the right on the same level
          
          if (queue.length === 0 || queue[0][1] !== currentLevel) {
              rightView.push(value[0].val)
              currentLevel++
          }

      } else {
          rightView.push(value[0].val)
          currentLevel++
      }

      if (value[0].left) {
          queue.push([value[0].left, value[1]+1])
      }
      if (value[0].right) {
          queue.push([value[0].right, value[1]+1])
      }
  }

  return rightView
};