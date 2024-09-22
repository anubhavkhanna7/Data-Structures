var minCostClimbingStairs = function(cost) {
  if (cost.length < 3) return Math.min(...cost)
  
  let prev1 = cost[0]
  let prev2 = cost[1]
  
  for(let i = 2; i<cost.length; i++) {
      let sum =  Math.min(prev1 , prev2) + cost[i]
      prev1 = prev2
      prev2 = sum
  }
  
  return Math.min(prev1, prev2)
};