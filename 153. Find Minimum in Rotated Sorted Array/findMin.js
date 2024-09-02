var findMin = function(nums) {
  if (nums[0] < nums[nums.length - 1] || nums.length === 1) return nums[0];

  let start = 0, end = nums.length - 1;
  while (start < end) {
      let mid = Math.floor((start + end) / 2);
      
      if (mid > 0 && nums[mid - 1] > nums[mid]) {
          return nums[mid];
      }
      
      if (mid < nums.length - 1 && nums[mid] > nums[mid + 1]) {
          return nums[mid + 1];
      }
      
      if (nums[start] <= nums[mid]) {
          // Left side is sorted, so pivot must be in the right half
          start = mid + 1;
      } else {
          // Right side is sorted, so pivot must be in the left half
          end = mid;
      }
  }
  
  return nums[start];
};

var findMin = function(nums) {
  let start = 0, end = nums.length-1

  while (start < end) {
      let mid = Math.floor((start + end)/2)

      if (nums[end] < nums[mid]) {
          // left side is sorted
          start = mid + 1
      } else {
          // right side is sorted
          end = mid
      }
  }

  return nums[start]
};