var moveZeroes = function(nums) {
  var count = 0;
  var base = 0;
  var i = 0;
  while (i!= nums.length) {
    if(nums[i] == 0) {
      count++;
      i++;
    } else {
      nums[base] = nums[i];
      i++;
      base++
    }
  }
  for (i = 0; i<count; i++) {
    nums[base] = 0;
    base++;
  }
};