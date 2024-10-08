var uniquePaths = function(m, n) {
  let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
  dp[1][1] = 1
  for(let i = 1;i <= m; i++) {
      for(let j = 1;j <= n; j++) {
          if (i === 1 && j === 1) continue;
          dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
  }

  return dp[m][n]
};

var uniquePaths = function(m, n, memo = {}) {
  let path = m + '_' + n
  if (path in memo) return memo[path]

  if (m === 1 || n === 1) {
      memo[path] = 1
      return 1
  }

  memo[path] = uniquePaths(m-1,n, memo) + uniquePaths(m,n-1, memo)
  return memo[path]
};