var connectSticks = function (sticks) {
  let heap = new MinPriorityQueue()
  sticks.forEach(stick => heap.enqueue(stick))

  let sum = 0

  while (heap.size() > 1) {
    const num1 = heap.dequeue().element
    const num2 = heap.dequeue().element

    sum += num1 + num2
    heap.enqueue(num1 + num2)
  }

  return sum
};