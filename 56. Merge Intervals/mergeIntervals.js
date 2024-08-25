var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])
  let retVal = [], currentInterval = intervals[0]

  for (let i = 1; i<intervals.length; i++) {
      // if the intervals do not collide
      if (intervals[i][0] > currentInterval[1]) {
          retVal.push(currentInterval)
          currentInterval = intervals[i]

      } else {
          currentInterval[1] = Math.max(intervals[i][1], currentInterval[1])
      }
  }
  retVal.push(currentInterval)
  return retVal
};