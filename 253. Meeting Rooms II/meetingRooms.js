var minMeetingRooms = function (intervals) {
  if (intervals.length === 1) return 1

  intervals = intervals.sort((a, b) => a[0] - b[0])

  let heap = []
  const addToHeap = ([start, end]) => {

    if (start >= heap[0]) {
      heap[0] = end
    } else {
      heap.push(end)
    }

    heap = heap.sort((a, b) => a - b)
  }

  for (let i = 0; i < intervals.length; i++) {
    addToHeap(intervals[i])
  }

  return heap.length
};