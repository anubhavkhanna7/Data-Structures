var maximumSwap = function (num) {
  let maxToRight = []

  num += ''
  num = num.split('')
  let currMax = num.length - 1

  for (let i = num.length - 1; i >= 0; i--) {
    currMax = Number(num[i]) > Number(num[currMax]) ? i : currMax
    maxToRight.push(currMax)
  }

  maxToRight.reverse()

  for (let i = 0; i < num.length - 1; i++) {
    if (Number(num[i]) < Number(num[maxToRight[i]])) {
      [num[i], num[maxToRight[i]]] = [num[maxToRight[i]], num[i]]
      break
    }
  }

  num = num.join('')

  return Number(num)
}