var tribonacci = function(n, memo = {}) {
  if (n in memo) return memo[n]
  if (n< 3) return n === 0 ? 0 : 1

  memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n-3, memo)
  return memo[n]
};

var tribonacci = function(n, memo = {}) {
  if (n< 3) return n === 0 ? 0 : 1
  let arr = new Array(n+1).fill(0)
  arr[1] = 1
  arr[2] = 1
  
  for (let i = 3; i<=n; i++) {
      arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
  }
  
  return arr[arr.length-1]
};