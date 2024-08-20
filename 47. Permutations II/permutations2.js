var permuteUnique = function(nums) {
  let set = new Set();

  const permutation = (updatedNums, currentList = []) => {
      if (currentList.length === nums.length) {
          set.add(currentList.join(','));
          return;
      }

      for (let i = 0; i < updatedNums.length; i++) { 
          permutation(updatedNums.filter((_,index) => index !== i), [...currentList, updatedNums[i]]);
      }
  };
  
  permutation(nums);
  return [...set].map(val => val.split(',').map(Number));
};

var permuteUnique = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  const backtrack = (currentList = [], used = Array(nums.length).fill(false)) => {
      if (currentList.length === nums.length) {
          result.push([...currentList]);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (used[i]) continue;

          if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

          used[i] = true;
          currentList.push(nums[i]);
          
          backtrack(currentList, used);
          
          used[i] = false;
          currentList.pop();
      }
  };

  backtrack();
  return result;
};