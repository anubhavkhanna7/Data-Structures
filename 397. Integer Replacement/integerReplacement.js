var integerReplacement = function(n, memo = {}) {
  if (n === 1) return 0
  if (n in memo) return memo[n]

  if (n%2 == 0) {
      memo[n] = 1 + integerReplacement(n/2, memo)
  } else {
      memo[n] = 1 + Math.min(integerReplacement(n-1, memo), integerReplacement(n+1, memo))
  }

  return memo[n]
};