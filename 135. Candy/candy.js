var candy = function(ratings) {
  let candy = new Array(ratings.length).fill(1), n = ratings.length
  
  for (let i = 1; i < n; i++) {
      if (ratings[i] > ratings[i - 1]) {
          candy[i] = candy[i - 1] + 1;
      }
  }

  for (let i = n - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
          candy[i] = Math.max(candy[i], candy[i + 1] + 1);
      }
  }


  return candy.reduce((sum, acc) => sum += acc, 0)
};