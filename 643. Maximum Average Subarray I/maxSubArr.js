var findMaxAverage = function(nums, k) {
  let maxAvg = 0, currAvg = 0;

  for(let i = 0; i < k; i++) {
      maxAvg += nums[i]
  }
  currAvg = maxAvg;
  for(let i = k; i < nums.length; i++) {
      currAvg -= nums[i-k];
      currAvg += nums[i];
      if (currAvg > maxAvg) {
          maxAvg = currAvg;
      }
  }

  return maxAvg/k
};