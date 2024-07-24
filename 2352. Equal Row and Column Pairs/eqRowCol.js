var equalPairs = function(grid) {
  let mapr = new Map()
  let mapc = new Map()
  for(let i = 0; i< grid.length; i++) {
      let num1= [], num2 = []
      for(let j = 0; j<grid.length; j++) {
          num1.push(grid[i][j])
          num2.push(grid[j][i])
      }
      num1 = num1.join('-')
      num2 = num2.join('-')
      if (mapr.has(num1)) {
          mapr.set(num1, mapr.get(num1)+1)
      } else {
          mapr.set(num1, 1)
      }
      if (mapc.has(num2)) {
          mapc.set(num2, mapc.get(num2)+1)
      } else {
          mapc.set(num2, 1)
      }
  }

  let count = 0;
  for(const key of mapr.keys()) {
      if(mapc.has(key)) {
          count += mapr.get(key) * mapc.get(key)
      }
  }

  return count
};