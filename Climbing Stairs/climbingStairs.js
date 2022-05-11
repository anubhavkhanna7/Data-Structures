var climbStairs = function(numberOfStairs) {
  if (numberOfStairs <= 3) {
      return numberOfStairs;
  }
  let prev1 = 2, prev2 = 3, iterator = 4;
  while (iterator <= numberOfStairs) {
      let temp = prev1 + prev2;
      prev1 = prev2;
      prev2 = temp;
      iterator++;
  }
  return prev2;
};