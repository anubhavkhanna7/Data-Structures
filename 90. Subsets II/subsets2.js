var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  let retVal = []

  const subsetCreation = (index = 0, currentArr = []) => {
    retVal.push([...currentArr])
    for (let i = index; i < nums.length; i++) {

      if (i > index && nums[i] === nums[i - 1]) continue

      currentArr.push(nums[i])
      subsetCreation(i + 1, currentArr)
      currentArr.pop()
    }
  }

  subsetCreation(0, [])
  return retVal
};