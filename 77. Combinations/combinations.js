var combine = function(n, k) {
  let retVal = []

  const createCombination = (start, currentCombination) => {
      if (currentCombination.length === k) {
          retVal.push([...currentCombination])  
          return
      }

      for (let i = start; i <= n; i++) {
          currentCombination.push(i);
          createCombination(i + 1, currentCombination);
          currentCombination.pop();
      }
  }

  createCombination(1, [])
  return retVal
};