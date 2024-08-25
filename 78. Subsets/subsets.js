var subsets = function(nums) {
  let retVal = []

  const subsetCreation = (index = 0, currentArr = []) => {
      retVal.push([...currentArr])

      for (let i = index; i<nums.length; i++) {
          currentArr.push(nums[i])
          subsetCreation(i+1,currentArr)
          currentArr.pop()
      }
  }

  subsetCreation(0, [])
  return retVal
};