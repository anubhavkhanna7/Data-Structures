var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;
  nums.forEach((ee) => {
    if (ee == 1) {
      count += 1;
      if (max < count) {
        max = count;
      }
    } else {
      count = 0;
    }
  });
  return max;
};