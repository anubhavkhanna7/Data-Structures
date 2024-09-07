var maxOperations = function(nums) {
  let maxOperations = 0;
  const memo = new Map(); // To store subproblem results

  const performOperation = (array, operationCount, sum) => {
      const key = array.join(',') + ',' + sum; // Create a unique key for the memoization
      if (memo.has(key)) return; // If this subproblem is already solved, return
      memo.set(key, operationCount); // Memoize the result

      maxOperations = Math.max(operationCount, maxOperations);
      if (array.length < 2) {
          return;
      }

      if (sum === null) {
          performOperation(array.slice(2), operationCount + 1, array[0] + array[1]);
          if (array.length > 2) {
              performOperation(array.slice(0, array.length - 2), operationCount + 1, array[array.length - 2] + array[array.length - 1]); // Last two elements
              performOperation(array.slice(1, array.length - 1), operationCount + 1, array[0] + array[array.length - 1]); // First and last elements
          }
      } else {
          // Handle case when sum is already defined
          if (array[0] + array[1] === sum) {
              performOperation(array.slice(2), operationCount + 1, sum); // First two elements
          }
          if (array[array.length - 2] + array[array.length - 1] === sum && array.length > 2) {
              performOperation(array.slice(0, array.length - 2), operationCount + 1, sum); // Last two elements
          }
          if (array[0] + array[array.length - 1] === sum && array.length > 2) {
              performOperation(array.slice(1, array.length - 1), operationCount + 1, sum); // First and last elements
          }
      }
  };

  performOperation(nums, 0, null);
  return maxOperations;
};