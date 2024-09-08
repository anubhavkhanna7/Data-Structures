var finalPrices = function(prices) {
  for (let i = 0; i< prices.length-1; i++) {
      for (let j = i+1; j < prices.length; j++) {
          if (prices[j] <= prices[i]) {
              prices[i] -= prices[j]
              break;
          }
      }
      
  }

  return prices
};

var finalPrices = function(prices) {
  let retval = []
  for (let i = 0; i< prices.length-1; i++) {
      let isDiscountFound = false
      for (let j = i+1; j < prices.length; j++) {
          if (prices[j] <= prices[i]) {
              retval.push(prices[i] - prices[j])
              isDiscountFound = true
              break;
          }

      }
      if (!isDiscountFound) {
          retval.push(prices[i])
      }
  }

  retval.push(prices[prices.length-1])
  return retval
};