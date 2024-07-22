var productExceptSelf = function(nums) {
  let totProd = 1, zeroCount = 0;
  nums.forEach(num => {
      if (num) {
          totProd *= num;
      } else {
          zeroCount++;
      }
  })

  if (zeroCount > 1) {
      return new Array(nums.length).fill(0)
  } else if (zeroCount === 1){
      for(let i = 0; i < nums.length; i++) {
          nums[i] = nums[i] === 0 ? totProd : 0;
      }
  } else {
      for(let i = 0; i < nums.length; i++) {
          nums[i] = totProd/nums[i]
      }
  }

  return nums;
};