var findMaxLength = function (nums) {
  let counter = 0
  let contigousMap = new Map(), retval = 0

  contigousMap.set(0, -1)

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? counter-- : counter++

    if (!contigousMap.has(counter)) {
      contigousMap.set(counter, i)
    } else {
      retval = Math.max(retval, i - contigousMap.get(counter))
    }
  }

  return retval
};