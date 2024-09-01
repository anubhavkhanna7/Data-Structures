var majorityElement = function(nums) {
  let count1 = 0, count2 = 0, retval = []
  let candidate1 = null, candidate2 = null

  nums.forEach(num => {
      if (num === candidate1) {
          count1++
      } else if (num === candidate2) {
          count2++
      } else if (candidate1 === null || count1 === 0) {
          candidate1 = num
          count1 = 1
      } else if (candidate2 === null || count2 === 0) {
          candidate2 = num
          count2 = 1
      } else {
          count1--
          count2--
      }
  })

  count1 = 0
  count2 = 0
  nums.forEach(num => {
      if (num === candidate1) count1++
      if (num === candidate2) count2++
  })

  const count = Math.floor(nums.length/3)
  if(count1> count) retval.push(candidate1)
  if(count2> count) retval.push(candidate2)

  return retval
};