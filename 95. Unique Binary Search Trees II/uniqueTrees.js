var generateTrees = function(n) {
  if (n === 0) return []
  
  const createTrees = (startValue = 1, endValue = n) => {
      // breach limits
      if(startValue > endValue) {
          return [null]
      }
      
      let result = []
      
      for (let i = startValue; i<= endValue; i++) {
          //use values to left of index
          let leftTree = createTrees(startValue, i-1)
          //use values to right of index
          let rightTree = createTrees(i+1, endValue)
          
          for (let left of leftTree) {
              for (let right of rightTree) {
                  // for each index, create trees and push into result
                      let head = new TreeNode(i)
                      head.left = left
                      head.right = right
                      result.push(head)
              }
          }
      }
      return result
  }
  
  return createTrees()
};