var combinationSum = function (candidates, target) {
  let retVal = []

  // has Access to candidates and retVal
  const backTrack = (remainingTarget, currentList = [], startForLoop = 0) => {
    // if target reached, add it to the main array
    if (remainingTarget === 0) {
      retVal.push(currentList)
      return;
    }


    // if the target is a non zero value
    for (let i = startForLoop; i < candidates.length; i++) {
      // if the target is still reachable, proceed with the process
      if (remainingTarget - candidates[i] >= 0) {
        backTrack(remainingTarget - candidates[i], [...currentList, candidates[i]], i)
      }
    }
  }

  backTrack(target)
  return retVal
};