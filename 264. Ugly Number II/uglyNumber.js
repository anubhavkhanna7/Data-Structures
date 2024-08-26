var nthUglyNumber = function(n) {
    let retval = [1]
    if (n === 1) return retval
    let candidates = new Set([2,3,5]), start = 1

    while (start < n) {
        let nextUglyNumber = Math.min(...candidates)
        candidates.delete(nextUglyNumber)
        retval.push(nextUglyNumber)

        candidates.add(nextUglyNumber*2)
        candidates.add(nextUglyNumber*3)
        candidates.add(nextUglyNumber*5)
        start++
    }

    return retval[retval.length-1]
};

var nthUglyNumber = function(n) {
  if (n === 1) return 1;

  let dp = new Array(n);
  dp[0] = 1;
  let i2 = 0, i3 = 0, i5 = 0;
  let next_2 = 2, next_3 = 3, next_5 = 5;

  for (let i = 1; i < n; i++) {
      let nextUgly = Math.min(next_2, next_3, next_5);
      dp[i] = nextUgly;

      if (nextUgly === next_2) {
          i2++;
          next_2 = dp[i2] * 2;
      }
      if (nextUgly === next_3) {
          i3++;
          next_3 = dp[i3] * 3;
      }
      if (nextUgly === next_5) {
          i5++;
          next_5 = dp[i5] * 5;
      }
  }

  return dp[n - 1];
};