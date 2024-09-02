function binarySearch(array, left, right, element) {
  if(left < right) {
    let middle = Math.ceil(((left+right))/2);
    if(array[middle] === element) {
      return middle;
    }

    if(element < array[middle]) {
      return binarySearch(array, left, middle-1, element);
    }
    return binarySearch(array, middle+1, right, element);
  }

  if(array[left] < element) {
      return left+1;
  }
  return left;
}

var searchInsert = function(nums, target) {
  return (binarySearch(nums, 0, nums.length-1, target));
};


var searchInsert = function(nums, target) {
  if (target <= nums[0]) return 0
  if (target === nums[nums.length-1]) return nums.length-1
  if (target > nums[nums.length-1]) return nums.length
  let start = 0, end = nums.length-1, pos = -1

  while (start < end) {
      let mid = Math.ceil((start + end)/2)
      if (mid > 0 && nums[mid-1] < target && nums[mid] > target) {
          return mid
      } else if (nums[mid] < target) {
          start = mid
      } else if (nums[mid] > target) {
          end = mid
      } else {
          return mid
      }
  }
};