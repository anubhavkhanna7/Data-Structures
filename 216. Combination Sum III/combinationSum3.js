var combinationSum3 = function(k, n) {
  const retVal = []

  const createCombination = (currentList = []) => {
      let sum = currentList.reduce((val,agg) => val+agg,0)
      if (currentList.length === k && sum === n) {
          retVal.push(currentList)
          return
      }
      if(currentList.length > k) return

      let start = currentList.length > 0 ? currentList[currentList.length -1] : 1
      for(let i = start; i<10;i++) {
          if(!currentList.includes(i) && sum+i <= n) {
              createCombination([...currentList, i])
          }
      }

  }
  createCombination()
  return retVal
};


var combinationSum3 = function(k, n) {
  const retVal = [];

  const createCombination = (start, currentList, sum) => {
      if (currentList.length === k && sum === n) {
          retVal.push([...currentList]);
          return;
      }

      if (currentList.length >= k || sum >= n) return;

      for (let i = start; i <= 9; i++) {
          if (sum + i <= n) {
              createCombination(i + 1, [...currentList, i], sum + i);
          }
      }
  };

  createCombination(1, [], 0);
  return retVal;
};