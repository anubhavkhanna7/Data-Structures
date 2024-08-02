var rotate = function(nums, k) {
  if (k <= nums.length) {
      let newArr = nums.splice(nums.length-k, k)
      return nums.unshift(...newArr)
  }

  while(k > 0) {
      let num = nums.pop()
      nums.unshift(num)
      k--
  }

  return nums
};