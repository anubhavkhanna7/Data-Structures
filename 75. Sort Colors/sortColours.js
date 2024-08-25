var sortColors = function(nums) {
  let count1 = 0, count2 = 0, position0 = 0
  for (let i = 0; i<nums.length; i++) {
      if (nums[i] === 1) {
          count1++
      } else if (nums[i] === 2) {
          count2++
      } else {
          nums[position0] = 0
          position0++
      }
  }

  while(count1 > 0) {
      nums[position0] = 1
      position0++
      count1--
  }

  while(count2 > 0) {
      nums[position0] = 2
      position0++
      count2--
  }

  return nums
};