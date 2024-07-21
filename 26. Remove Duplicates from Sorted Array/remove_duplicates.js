var removeDuplicates = function(nums) {
  let actualIndex = 0,iterIndex = 0;
  while (iterIndex<nums.length) {
      if (iterIndex !== 0 && nums[iterIndex] !== nums[actualIndex]) {
          actualIndex++;
          nums[actualIndex] = nums[iterIndex];
      }
      iterIndex++;
  }
  return actualIndex+1;
};