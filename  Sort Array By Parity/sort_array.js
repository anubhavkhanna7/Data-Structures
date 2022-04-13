var sortArrayByParity = function(nums) {
  var base = 0;
  var i = 0;
  var j = 0;
  var temp;
  for (i; i<nums.length; i++) {
    if (nums[i] %2 == 0 ) {
      temp = nums[i];
      for (j = i; j >base; j--) {
        nums[j] = nums[j-1];
      }
      nums[base] = temp;
      base++;
    }
  }
  return nums;
};