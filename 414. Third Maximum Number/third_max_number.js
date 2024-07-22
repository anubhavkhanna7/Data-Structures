var thirdMax = function(nums) {
  nums = nums.filter(function(item, pos) {
    return nums.indexOf(item) == pos;
  });
  for(var i = 0; i<nums.length; i++) {
    for (var j = i+1; j< nums.length; j++) {
      var temp;
      if (nums[i]> nums[j]) {
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  if (nums.length < 3) {
    return nums[nums.length -1];
  } else {
    return nums[nums.length -3];
  }
  
};