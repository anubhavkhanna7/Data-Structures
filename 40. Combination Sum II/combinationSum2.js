var combinationSum2 = function(candidates, target) {
  let retVal = [];
  candidates.sort((a, b) => a - b);

  const createCombination = (start, target, currentArr = []) => {
      if (target === 0) {
          retVal.push([...currentArr]);
          return;
      }

      for (let i = start; i < candidates.length; i++) {
          if (candidates[i] > target) break;

          if (i > start && candidates[i] === candidates[i - 1]) continue;

          createCombination(i + 1, target - candidates[i], [...currentArr, candidates[i]]);
      }
  };

  createCombination(0, target);
  return retVal;
};