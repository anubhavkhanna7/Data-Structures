class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // Get the index of the left child node
  leftChildIndex(i) {
    return 2 * i + 1;
  }

  // Get the index of the right child node
  rightChildIndex(i) {
    return 2 * i + 2;
  }

  // Peek at the largest element in the heap
  front() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  // Add a new value to heap
  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    // Move the new element up to maintain the max-heap property
    while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  dequeue() {
    if (this.size() === 0) return null; // Return null if the queue is empty

    const root = this.heap[0];
    if (this.size() === 1) {
      return this.heap.pop(); // If there's only one element, return it
    }

    this.heap[0] = this.heap.pop(); // Move the last element to the root
    this.heapifyDown(); // Restore the max-heap property
    return root; // Return the maximum element
  }

  heapifyDown() {
    let index = 0;

    // Move the root element down to maintain the max-heap property
    // check if next left index is within bounds
    while (this.leftChildIndex(index) < this.size()) {
      let largerChildIndex = this.leftChildIndex(index);

      // Check if the right child exists and is larger than the left child
      if (
        // check if next right index is within bounds
        this.rightChildIndex(index) < this.size() &&
        this.heap[this.rightChildIndex(index)] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = this.rightChildIndex(index);
      }

      // If the current element is larger than both children, we're done
      if (this.heap[index] >= this.heap[largerChildIndex]) {
        break;
      }

      // Swap with the larger child
      this.swap(index, largerChildIndex);
      index = largerChildIndex; // Move down to the larger child's index
    }
  }
}
