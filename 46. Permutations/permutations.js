var permute = function(nums) {
  let retVal = []

  const permutation = (updatedNums, currentArr = []) => {
      if (currentArr.length === nums.length) {
          retVal.push(currentArr)
          return
      }

      for(let i = 0; i<updatedNums.length; i++) {
          permutation(updatedNums.filter(val => val !== updatedNums[i]), currentArr.push(updatedNums[i]))
      }
  }
  permutation(nums)
  return retVal
};