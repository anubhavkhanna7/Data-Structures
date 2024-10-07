var findKthNumber = function (n, k) {
  if (n < 10) return k
  const countingSteps = (start) => {
    let currentStart = start
    let nextStart = start + 1
    let counterOfSteps = 0

    while (currentStart <= n) {
      // n+1 to count numbers ending in 0's
      counterOfSteps += Math.min(n + 1, nextStart) - currentStart

      nextStart *= 10
      currentStart *= 10
    }

    return counterOfSteps
  }

  let currentStart = 1
  // Accomodate Current Start
  k -= 1

  while (k > 0) {
    let countOfSteps = countingSteps(currentStart)
    if (countOfSteps <= k) {
      k -= countOfSteps
      currentStart++
    } else {
      currentStart *= 10
      k -= 1
    }
  }

  return currentStart
};