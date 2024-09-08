var subArrayRanges = function(nums) {
  let totalSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
      let minVal = nums[i];
      let maxVal = nums[i];
      
      for (let j = i; j < nums.length; j++) {
          minVal = Math.min(minVal, nums[j]);
          maxVal = Math.max(maxVal, nums[j]);
          
          totalSum += maxVal - minVal;
      }
  }
  
  return totalSum;
};