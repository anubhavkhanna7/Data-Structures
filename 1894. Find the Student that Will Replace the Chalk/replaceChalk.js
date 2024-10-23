var chalkReplacer = function (chalk, k) {
  let sumArr = [chalk[0]]
  for (let i = 1; i < chalk.length; i++) {
    sumArr.push(chalk[i] + sumArr[sumArr.length - 1])
  }

  const totalSum = sumArr[sumArr.length - 1]
  k = k % totalSum;

  let start = 0, end = sumArr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (k === sumArr[mid]) return mid + 1
    if (k > sumArr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return start
};