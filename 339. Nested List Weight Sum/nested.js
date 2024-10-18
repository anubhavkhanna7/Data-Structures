var depthSum = function (nestedList) {
  let sum = 0, depth = 1
  while (nestedList.length > 0) {
    let queueLen = nestedList.length

    for (let i = 0; i < queueLen; i++) {
      const shiftedVal = nestedList.shift()
      if (shiftedVal.isInteger()) {
        sum += shiftedVal.getInteger() * depth
      } else {
        nestedList.push(...shiftedVal.getList())
      }
    }
    depth++
  }

  return sum
};