var singleNumber = function(nums) {
  let sum = nums.reduce((agg, num) => agg += num, 0)
  let tripleSum = [...(new Set(nums))].reduce((agg, num) => agg += num, 0) * 3

  return (tripleSum - sum)/2
};