var maxProfit = function(prices) {
  let i = 0, sum = 0;
  while (i < prices.length-1) {
    if(prices[i] < prices[i+1]) {
      sum += prices[i+1] - prices[i];
    }
    i++;
  }
  return sum;
};