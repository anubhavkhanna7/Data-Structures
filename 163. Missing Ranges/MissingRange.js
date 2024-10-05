var findMissingRanges = function (nums, lower, upper) {
  let retval = [];

  if (nums.length === 0) return [[lower, upper]];
  if (nums[0] > lower) {
    retval.push([lower, nums[0] - 1]);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 < nums[i + 1]) {
      retval.push([nums[i] + 1, nums[i + 1] - 1]);
    }
  }

  if (nums[nums.length - 1] < upper) {
    retval.push([nums[nums.length - 1] + 1, upper]);
  }

  return retval;
};