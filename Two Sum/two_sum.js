var twoSum = function(nums, target) {
  let i = 0;
  while(i< nums.length) {
      let index = nums.slice(i+1, nums.length).indexOf(target-nums[i]);
      if(index !== -1) {
          return[i, index+i+1];
      }
      i++;
  }
};