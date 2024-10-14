class MinPriorityQueue {
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
  leftChild(i) {
    return 2 * i + 1;
  }

  // Get the index of the right child node
  rightChild(i) {
    return 2 * i + 2;
  }

  // Peek at the smallest element in the heap
  front() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    // Move the new element up to maintain the min-heap property
    while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
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
    this.heapifyDown(); // Restore the min-heap property
    return root; // Return the minimum element
  }

  heapifyDown() {
    let index = 0;

    // Move the root element down to maintain the min-heap property
    while (this.leftChild(index) < this.size()) {
      let smallerChildIndex = this.leftChild(index);

      // Check if the right child exists and is smaller than the left child
      if (
        this.rightChild(index) < this.size() &&
        this.heap[this.rightChild(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.rightChild(index);
      }

      // If the current element is smaller than both children, we're done
      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }

      // Swap with the smaller child
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex; // Move down to the smaller child's index
    }
  }
}
