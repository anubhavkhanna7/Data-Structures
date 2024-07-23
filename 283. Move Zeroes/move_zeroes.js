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

var moveZeroes = function(nums) {
  let pos = 0;
  for (let i = 0; i<nums.length; i++) {
      if(nums[i] !== 0) {
          if(pos < i) {
              nums[pos] = nums[i];
              nums[i] = 0
          }
          pos++
      }
  }
  while(pos < nums.length) {
      nums[pos] = 0
      pos++;
  }
  return nums
};