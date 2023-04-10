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

var twoSum = function(nums, target) {
  let map = new Map(), i = 0;
  
  while(i !== nums.length) {
    let comp = target - nums[i];

    if(map.has(comp)) {
      return [i, map.get(comp)];
    }

    map.set(nums[i], i);
    i++;
  }
};