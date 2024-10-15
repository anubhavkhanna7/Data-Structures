var minAvailableDuration = function (slots1, slots2, duration) {
  let retval = []
  let iter1 = 0, iter2 = 0

  slots1.sort((a, b) => a[0] - b[0])
  slots2.sort((a, b) => a[0] - b[0])

  while (iter1 < slots1.length && iter2 < slots2.length) {
    let [start1, end1] = slots1[iter1]
    let [start2, end2] = slots2[iter2]

    let maxStart = Math.max(start1, start2)
    let minEnd = Math.min(end1, end2)

    if (minEnd - maxStart >= duration) {
      retval.push(maxStart, maxStart + duration)
      break
    }

    if (end1 < end2) {
      iter1++
    } else {
      iter2++
    }
  }

  return retval
};