var removeElement = function(nums, val) {
  let actualIndex = 0, iterIndex = 0;
  while(iterIndex < nums.length) {
      if (nums[iterIndex] !== val) {
          if (actualIndex === iterIndex) {
              actualIndex++;
          } else {
              nums[actualIndex] = nums[iterIndex];
              actualIndex++;
          }
      }
      iterIndex++;
  }
  return actualIndex;
};