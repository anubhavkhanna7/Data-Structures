var shortestSubarray = function(nums, k) {
  let sumArr = [0];
  for (let i = 1; i <= nums.length; i++) {
      sumArr[i] = sumArr[i - 1] + nums[i - 1];
  }

  let deque = [];
  let smallest = nums.length + 1;

  for (let i = 0; i < sumArr.length; i++) {
      // Remove elements from deque where the subarray sum is >= k
      while (deque.length > 0 && sumArr[i] - sumArr[deque[0]] >= k) {
          smallest = Math.min(smallest, i - deque.shift()); // Get subarray length
      }

      // Maintain increasing order of prefix sums in the deque
      while (deque.length > 0 && sumArr[i] <= sumArr[deque[deque.length - 1]]) {
          deque.pop();
      }

      // Add current index to deque
      deque.push(i);
  }

  return smallest === nums.length + 1 ? -1 : smallest;
};