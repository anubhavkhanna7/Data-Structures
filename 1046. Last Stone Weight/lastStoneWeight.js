var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b)

  while (stones.length > 1) {
    let stone1 = stones.pop()
    let stone2 = stones.pop()

    if (stone1 == stone2) {
      if (stones.length === 0) return 0
      continue
    } else {
      stones.push(Math.abs(stone1 - stone2))
      stones.sort((a, b) => a - b)
    }
  }

  return stones[0]
};

var lastStoneWeight = function (stones) {
  let heap = new MaxPriorityQueue()

  stones.forEach(stone => heap.enqueue(stone))

  while (heap.size() > 1) {
    let stone1 = heap.dequeue().element
    let stone2 = heap.dequeue().element

    if (stone1 == stone2) {
      if (heap.size() === 0) return 0
      continue
    } else {
      heap.enqueue(Math.abs(stone1 - stone2))
    }
  }

  return heap.front().element
};