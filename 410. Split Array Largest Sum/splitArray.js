var splitArray = function (nums, k) {
  let min = Math.max(...nums)
  let max = nums.reduce((a, b) => a + b, 0)

  const isValid = (allowedMaxSum) => {
    let currentSum = 0, currentCount = 1

    for (num of nums) {
      currentSum += num

      if (currentSum > allowedMaxSum) {
        currentCount++
        currentSum = num
      }

      if (currentCount > k) return false
    }

    return true
  }

  while (min < max) {
    let mid = Math.floor((min + max) / 2)

    if (isValid(mid)) {
      max = mid
    } else {
      min = mid + 1
    }
  }

  return min

};

// TLE

var splitArray = function (nums, k) {

  let sumArr = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    sumArr.push(nums[i] + sumArr[i - 1]);
  }

  let lastIndex = nums.length - 1;

  const calcSubArrSum = (startIndex, currMaxSum, remainingSplits) => {
    if (remainingSplits === 1) {
      let sum = sumArr[lastIndex] - (startIndex > 0 ? sumArr[startIndex - 1] : 0);
      return Math.max(currMaxSum, sum);
    }

    let retval = Infinity;
    for (let i = startIndex; i <= nums.length - remainingSplits; i++) {
      let sum = sumArr[i] - (startIndex > 0 ? sumArr[startIndex - 1] : 0);
      let maxSum = calcSubArrSum(i + 1, Math.max(currMaxSum, sum), remainingSplits - 1);
      retval = Math.min(retval, maxSum);
    }

    return retval;
  };

  return calcSubArrSum(0, 0, k)
}