var search = function(nums, target) {
  let start = 0, end = nums.length -1

  while(start <= end) {
      let mid = Math.floor((start+end)/2)
      if (nums[mid] === target || nums[start] === target || nums[end] === target) return true

      if (nums[start] === nums[mid] && nums[mid] === nums[end]) {
          start++;
          end--;
      } else if (nums[mid] >= nums[start]) {
          // sorted array on left side
          if (target >= nums[start] && target <nums[mid]) {
              end = mid-1
              // start++
          } else {
              start = mid+1
          }
      } else {
          // sorted array on right side
          if (target > nums[mid] && target <= nums[end]) {
              start = mid+1
              // end--
          } else {
              end = mid -1
          }
      }
  }

  return false
};