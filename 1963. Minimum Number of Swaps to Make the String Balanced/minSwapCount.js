var minSwaps = function (bracketStr) {
  let startCount = 0

  for (let i = 0; i < bracketStr.length; i++) {
    if (bracketStr[i] === '[') {
      startCount++
    } else if (startCount > 0) {
      startCount--
    } else continue
  }

  return Math.floor((startCount + 1) / 2)
}