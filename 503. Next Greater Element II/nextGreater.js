var nextGreaterElements = function(nums) {
  let retval = []
  for(let i = 0; i<nums.length; i++) {
      let j = i+1, value = -1
      while(j !== i) {
          if(j === nums.length) { j = 0 }
          if (j === i) break
          if (nums[j] > nums[i]) {
              value = nums[j]
              break;
          }
          j++
      }
      retval.push(value)
  }
  return retval
};

