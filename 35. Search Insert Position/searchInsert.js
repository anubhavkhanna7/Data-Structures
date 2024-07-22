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