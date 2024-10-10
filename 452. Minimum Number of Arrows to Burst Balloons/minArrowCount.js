// faster solution
var findMinArrowShots = function (points) {
  // sort points in ascending order
  points.sort((a, b) => a[0] - b[0])
  let end = points[0][1], count = 1

  for (let i = 1; i < points.length; i++) {
    if (end >= points[i][0]) {
      end = Math.min(end, points[i][1])
      continue
    }

    end = points[i][1]
    count++
  }

  return count
};

// Slower soultion but works
var findMinArrowShots = function (points) {
  let heap = []

  // sort points in ascending order
  points.sort((a, b) => a[0] - b[0])

  const addToHeap = (interval) => {
    if (heap.length > 0 && heap[0][1] >= interval[0]) {
      heap[0][1] = Math.min(heap[0][1], interval[1])
      return
    }

    heap.push(interval)
    heap.sort((a, b) => b[0] - a[0])
  }

  for (let i = 0; i < points.length; i++) {
    addToHeap(points[i])
  }

  return heap.length
};