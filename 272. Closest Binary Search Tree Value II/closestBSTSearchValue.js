var closestKValues = function (root, target, k) {
  const minHeap = new MinPriorityQueue()
  const maxHeap = new MaxPriorityQueue()
  const retval = []

  const traverse = (node) => {
    if (node.val > target) {
      maxHeap.enqueue(node.val)
    } else {
      minHeap.enqueue(node.val)
    }

    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }

  traverse(root)

  while (minHeap.size() > 0 && maxHeap.size() > 0 && (minHeap.size() + maxHeap.size() > k)) {
    const minNum = minHeap.front().element
    const maxNum = maxHeap.front().element

    if (Math.abs(minNum - target) < Math.abs(maxNum - target)) {
      maxHeap.dequeue()
    } else {
      minHeap.dequeue()
    }
  }

  if (minHeap.size() > 0 && minHeap.size() > k) {
    while (minHeap.size() > k) {
      minHeap.dequeue()
    }
  }

  if (maxHeap.size() > 0 && maxHeap.size() > k) {
    while (maxHeap.size() > k) {
      maxHeap.dequeue()
    }
  }

  while (minHeap.size()) {
    retval.push(minHeap.dequeue().element)
  }

  while (maxHeap.size()) {
    retval.push(maxHeap.dequeue().element)
  }

  return retval
};