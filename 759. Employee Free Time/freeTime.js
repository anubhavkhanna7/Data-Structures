/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
  let commonTime = []

  schedule = schedule.flat().sort((a,b) => a.start - b.start)

  for (interval of schedule) {
      let {start, end} = interval
      if (commonTime.length === 0) {
          commonTime.push([start,end])
          continue
      }

      let matchFound = false
      for(let i = 0;i<commonTime.length;i++) {
          let [cstart, cend] = commonTime[i]

          if ((start >= cstart && start<= cend) || (cstart>=start && cstart<=end)) {
              commonTime[i] = [Math.min(cstart, start), Math.max(cend, end)]
              matchFound = true
              break
          }
      }

      if (!matchFound) {
          commonTime.push([interval.start, interval.end])
      }
  }

  let retval = []

  for(let i = 1; i<commonTime.length; i++) {
      retval.push(new Interval(commonTime[i-1][1], commonTime[i][0]))
  }

  return retval
};



