var shipWithinDays = function (weights, days) {
  let min = Math.max(...weights)
  let max = weights.reduce((a, b) => a + b, 0)

  const isValid = (maxAllowedCount) => {
    let currentCount = 1, currentSum = 0

    for (item of weights) {
      currentSum += item

      if (currentSum > maxAllowedCount) {
        currentSum = item
        currentCount++
      }

      if (currentCount > days) return false
    }

    return true
  }

  while (min < max) {
    let mid = Math.floor((min + max) / 2)

    if (isValid(mid)) {
      max = mid
    } else {
      min = mid + 1
    }
  }

  return min
};