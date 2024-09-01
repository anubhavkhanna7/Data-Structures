var rearrangeArray = function(nums) {
  let positive = [], negative = []
  nums.forEach(num => {
      num < 0 ? negative.push(num) : positive.push(num)
  })

  for(let i = 0; i < nums.length; i+=2) {
      nums[i] = positive[i/2]
      nums[i+1] = negative[i/2]
  }

  return nums
};