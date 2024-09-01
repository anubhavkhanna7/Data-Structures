var verticalTraversal = function(root) {
  if (!root) return [];
  
  let nodeList = [], result = [];

  let queue = [[root, 0, 0]];
  
  while (queue.length) {
      let [node, row, col] = queue.shift();
      
      nodeList.push([col, row, node.val]);
      
      if (node.left) queue.push([node.left, row + 1, col - 1]);
      if (node.right) queue.push([node.right, row + 1, col + 1]);
  }
  
  nodeList.sort((a, b) => {
      if (a[0] !== b[0]) {
          return a[0] - b[0];
      } else if (a[1] !== b[1]) {
          return a[1] - b[1];
      } else {
          return a[2] - b[2];
      }
  });
  

  let currentCol = nodeList[0][0], temp = [];
  
  for (let [col, row, val] of nodeList) {
      if (col === currentCol) {
          temp.push(val);
      } else {
          result.push(temp);
          temp = [val];
          currentCol = col;
      }
  }
  
  result.push(temp);
  
  return result;
};


var verticalTraversal = function(root) {
  if (!root) return [];
  let columnMap = new Map()
  let result = [], minCol = 0;

  let queue = [[root, 0, 0]];
  
  while (queue.length) {
      let [node, row, col] = queue.shift();
      
      columnMap.set(col, [...(columnMap.get(col) || []), [node.val, row]])
      minCol = Math.min(minCol, col)

      if (node.left) queue.push([node.left, row + 1, col - 1]);
      if (node.right) queue.push([node.right, row + 1, col + 1]);
  }

  let i = minCol
  while(columnMap.has(i)) {
      let val = columnMap.get(i)
      val.sort((a,b) => {
          return a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]
      })
      val = val.map(v => v[0])
      result.push(val);
      i++
  }
  
  return result;
};