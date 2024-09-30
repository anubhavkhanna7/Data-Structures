var findTargetSumWays = function (nums, target) {
  let memo = new Map();

  const findWaysToGetToSum = (currentSum, start) => {
    if (start === nums.length) {
      return currentSum === target ? 1 : 0;
    }

    let key = `${currentSum},${start}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let addWays = findWaysToGetToSum(currentSum + nums[start], start + 1);
    let subtractWays = findWaysToGetToSum(currentSum - nums[start], start + 1);
    const totalWays = addWays + subtractWays;

    memo.set(key, totalWays);
    return totalWays;
  };

  return findWaysToGetToSum(0, 0);
};