var coinChange = function(coins, amount, memo = {}) {
  if (memo[amount]) return memo[amount]
  if (amount === 0) return 0
  if (amount < 0) return -1

  let minCoinCount = -1
  for (coin of coins) {
      let currentCount = coinChange(coins, amount - coin, memo) +1
      if ((minCoinCount === -1 && currentCount >0) || (currentCount < minCoinCount && currentCount > 0)) {
          minCoinCount = currentCount
      }
  }

  memo[amount] = minCoinCount
  return memo[amount]
};