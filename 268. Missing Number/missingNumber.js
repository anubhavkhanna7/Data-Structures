var missingNumber = function(nums) {
  let sum = nums.reduce((agg, val) => agg+=val, 0)
  let finalSum = (nums.length * (nums.length+1))/2

  return finalSum - sum
};