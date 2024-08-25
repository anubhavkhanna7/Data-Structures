var insert = function(intervals, newInterval) {
  let retVal = [];
  let i = 0;

  // Add all intervals that come before the newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
      retVal.push(intervals[i]);
      i++;
  }

  // Merge intervals that overlap with newInterval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
  }

  // Add the merged interval
  retVal.push(newInterval);

  // Add the remaining intervals
  while (i < intervals.length) {
      retVal.push(intervals[i]);
      i++;
  }

  return retVal;
};