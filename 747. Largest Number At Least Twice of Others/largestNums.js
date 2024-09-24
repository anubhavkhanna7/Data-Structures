/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let [high, secondHigh] = nums[0] > nums[1] ? [0,1] : [1,0]

  for (let i = 2; i<nums.length; i++) {
      if(nums[i] > nums[high]) {
          secondHigh = high
          high = i
      } else if (nums[i] > nums[secondHigh]) {
          secondHigh = i
      }
  }

  return nums[high] >= 2*nums[secondHigh] ? high : -1
};