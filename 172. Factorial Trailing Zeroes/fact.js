var trailingZeroes = function (n) {
  if (n === 0) return 0
  let count = 0

  for (let i = 0; i <= n; i += 5) {
    let num = i
    while (num % 5 === 0 && num > 0) {
      num /= 5
      count++
    }
  }

  return count
};