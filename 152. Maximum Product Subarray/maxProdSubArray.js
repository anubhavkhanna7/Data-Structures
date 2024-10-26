var maxProduct = function (nums) {

  let minSoFar = nums[0]
  let maxSoFar = nums[0]
  let allRoundMax = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const value = nums[i]
    let tempMax = Math.max(value, maxSoFar * value, minSoFar * value)
    minSoFar = Math.min(value, maxSoFar * value, minSoFar * value)
    maxSoFar = tempMax

    allRoundMax = Math.max(tempMax, allRoundMax)
  }

  return allRoundMax
};