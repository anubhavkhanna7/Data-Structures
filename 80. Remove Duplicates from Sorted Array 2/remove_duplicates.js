var removeDuplicates = function(nums) {
  let iterIndex = 0, actualIndex = 0, ctr = 0;
  while (iterIndex < nums.length) {
      if (iterIndex === 0) {
          ctr++;
      } else if (nums[iterIndex] !== nums[actualIndex]) {
          actualIndex++;
          nums[actualIndex] = nums[iterIndex];
          ctr = 1;
      } else if (ctr < 2 && nums[iterIndex] === nums[actualIndex]) {
          actualIndex++;
          nums[actualIndex] = nums[iterIndex];
          ctr++;
      }
      iterIndex++;
  }
  return actualIndex+1
};