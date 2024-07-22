var firstMissingPositive = function(nums) {
  nums = nums.sort((a,b) => {return a-b;});
  let map = new Map();
  nums.forEach(element => {
    if(!map.has(element) && element > 0) {
      map.set(map.size+1, element);
    } 
  });
  let i, number = 0;
  for (i = 1; i<= map.size; i++) {
    if(map.get(i) !== i) {
      number = i;
      break;
    }
  }
  if(number === 0) {
    number = i;
  }
  return number;
};