var singleNumber = function(nums) {
  let i = 0;
  let map = new Map();
  while(i<nums.length) {
    if(map.has(nums[i])) {
      map.set(nums[i], 2);
    } else {
      map.set(nums[i], 1);
    }
    i++;
  }
  let index = [...map.values()].indexOf(1);
  return [...map.keys()][index];
};