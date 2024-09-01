var nextPermutation = function(nums) {
  let arrayLen = nums.length-1;
  let k = -1, l = -1;
  
  // Find the largest index k such that nums[k] < nums[k + 1]
  for (let i = arrayLen - 1; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
          k = i;
          break;
      }
  }

  // If the array is in descending order, reverse it to get the smallest permutation
  if (k === -1) {
      nums.reverse();
      return;
  }

  // Find the largest index l greater than k such that nums[k] < nums[l]
  for (let i = arrayLen; i > k; i--) {
      if (nums[i] > nums[k]) {
          l = i;
          break;
      }
  }

  // Swap nums[k] and nums[l]
  [nums[k], nums[l]] = [nums[l], nums[k]];

  // Reverse the subarray starting at k + 1
  let start = k + 1;
  let end = arrayLen;
  while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
  }
};