var longestOnes = function(nums, k) {
  if (nums.filter(num => num === 0).length <= k) return nums.length
  let escapeCount = k, prevPointer = 0, maxCount = 0, currentCount = 0;

  for(let i = 0; i<nums.length; i++) {
      if (!nums[i] && escapeCount) {
          if (escapeCount === k) {
              prevPointer = i
          }
          escapeCount--
          currentCount++
          maxCount = maxCount < currentCount ? currentCount : maxCount
      } else if (!nums[i] && !escapeCount) {
          maxCount = maxCount < currentCount ? currentCount : maxCount
          escapeCount = k
          currentCount = 0
          i = prevPointer
          prevPointer++
      } else {
          currentCount++
          maxCount = maxCount < currentCount ? currentCount : maxCount
      }
  }

  return maxCount
};