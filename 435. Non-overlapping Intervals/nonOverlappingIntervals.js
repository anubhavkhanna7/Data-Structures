var eraseOverlapIntervals = function(intervals) {
  let sortedIntervals = intervals.sort((a,b) => a[1] - b[1]), countToRemove = 0
  let currentEnd = sortedIntervals[0][1]

  for (let i = 1; i<sortedIntervals.length; i++) {
      if (currentEnd > sortedIntervals[i][0]) {
          countToRemove++
      } else {
          currentEnd = sortedIntervals[i][1]
      }
  }
  return countToRemove
};