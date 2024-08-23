var tribonacci = function(n, memo = {}) {
  if (n in memo) return memo[n]
  if (n< 3) return n === 0 ? 0 : 1

  memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n-3, memo)
  return memo[n]
};