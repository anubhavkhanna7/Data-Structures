var canPartition = function (nums) {
  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);

  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;
  const memo = new Map();

  const traverse = (reducedSum, index) => {
    if (reducedSum === target) return true;
    if (reducedSum > target || index >= nums.length) return false;

    const key = `${reducedSum}-${index}`;
    if (memo.has(key)) return memo.get(key);

    const isValid = traverse(reducedSum + nums[index], index + 1) || traverse(reducedSum, index + 1);

    memo.set(key, isValid);
    return isValid;
  };

  return traverse(0, 0);
};