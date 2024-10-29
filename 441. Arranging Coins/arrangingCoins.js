var arrangeCoins = function (n) {
  if (n < 3) return 1
  if (n === 3) return 2

  const calculateCountTillRow = (row) => (row * (row + 1)) / 2

  let upperLimit = 2, lowerLimit = 0, nextSum = 3

  while (nextSum < n) {
    lowerLimit = upperLimit
    upperLimit *= 2

    nextSum = calculateCountTillRow(upperLimit)
  }

  while (lowerLimit <= upperLimit) {
    let mid = Math.floor((lowerLimit + upperLimit) / 2)

    const valueAtMid = calculateCountTillRow(mid)

    if (valueAtMid === n) return mid

    if (valueAtMid < n) {
      lowerLimit = mid + 1
    } else {
      upperLimit = mid - 1
    }
  }

  return lowerLimit - 1
};