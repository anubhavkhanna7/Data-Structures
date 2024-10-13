var maxWidthRamp = function (nums) {
  let arr = [0], retval = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[arr[arr.length - 1]]) {
      arr.push(i)
    }
  }


  for (let i = nums.length - 1; i > 0; i--) {
    while (arr.length > 0 && nums[i] >= nums[arr[arr.length - 1]]) {
      const index = arr.pop()
      retval = Math.max(retval, i - index)
    }
  }

  return retval
};