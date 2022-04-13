var removeDuplicates = function(nums) {
  var base = 0;
  var count = 1;
  for (var i=0; i<nums.length; i++) {
      if (nums[base] != nums[i]) {
          count++;
          nums[base+1] = nums[i];
          base = base+1;
      }
  }
  nums.length = count;    
};