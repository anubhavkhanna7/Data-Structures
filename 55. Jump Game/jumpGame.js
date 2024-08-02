var canJump = function(nums) {
  let toReach = nums.length-1

  for(let i = nums.length-2; i>= 0; i--) {
      if (nums[i] + i >= toReach) {
          toReach = i
      }
  }
  return toReach === 0
};