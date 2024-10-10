var maxProfit = function (prices, fee) {
  let n = prices.length;
  if (n === 0) return 0;

  let currentTotal = 0;
  let startStock = -prices[0];

  for (let i = 1; i < n; i++) {
    currentTotal = Math.max(currentTotal, startStock + prices[i] - fee);
    startStock = Math.max(startStock, currentTotal - prices[i]);
  }

  return currentTotal;
};
