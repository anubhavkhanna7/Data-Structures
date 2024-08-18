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

var climbStairs = function(n) {
  if (n<4) return n
  let prev1 = 2, prev2 = 3

  for (let i = 0; i<n-3;i++) {
      let sum = prev1 + prev2
      prev1 = prev2
      prev2 = sum
  }

  return prev2
};