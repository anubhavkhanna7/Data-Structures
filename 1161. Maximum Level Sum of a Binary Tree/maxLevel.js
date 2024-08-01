var maxLevelSum = (root) => {
  let currentLevel = 0, maxLevel = 0, tempMax = -Infinity, maxSum = new Map();

  if (!root.left && !root.right) return 1
  let queue = []
  queue.push([root, 0])

  while(queue.length) {
      const value = queue.shift();
      if (maxSum.has(value[1])) {
          maxSum.set(value[1], maxSum.get(value[1]) + value[0].val)
      } else {
          maxSum.set(value[1], value[0].val)
      }

      if (value[0].left) {
          queue.push([value[0].left, value[1]+1])
      }

      if (value[0].right) {
          queue.push([value[0].right, value[1]+1])
      }
  }

  for (const key of maxSum.keys()) {
      if (tempMax < maxSum.get(key)) {
          tempMax = maxSum.get(key)
          maxLevel = key
      }
  }

  return maxLevel+1;
};