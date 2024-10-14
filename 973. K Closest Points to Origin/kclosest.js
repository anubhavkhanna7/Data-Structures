var kClosest = function (points, k) {
  const heap = new MinPriorityQueue()
  const map = new Map()

  for (point of points) {
    const [x, y] = point
    const dist = Math.pow(x, 2) + Math.pow(y, 2)
    heap.enqueue(dist)

    if (!map.has(dist)) map.set(dist, [])

    map.get(dist).push(point)
  }

  const retval = []
  while (k > 0) {
    const val = heap.dequeue().element

    retval.push(map.get(val).pop())
    k--
  }
  return retval
};