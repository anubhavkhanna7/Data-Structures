var generateMatrix = function(n) {
  let retVal = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let start = 0, count = 1

  while(start <= Math.ceil(n/2)) {
      for(let j = start; j<n-start; j++) {
          if (retVal[start][j] === 0) {
              retVal[start][j] = count;
              count++
          }
      }

      for(let i = start+1; i<n; i++) {
          if (retVal[i][n-start-1] === 0) {
              retVal[i][n-start-1] = count;
              count++
          }
      }

      for(let j = n-start-2; j>=start; j--) {
          if (retVal[n-start-1][j] === 0) {
              retVal[n-start-1][j] = count;
              count++
          }
      }

      for(let i = n-start-2; i>=start; i--) {
          if (retVal[i][start] === 0) {
              retVal[i][start] = count;
              count++
          }
      }
      start++
  }

  return retVal
};