class DLLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

var LRUCache = function(capacity) {
  this.maxCapacity = capacity;
  this.head = null;
  this.tail = null;  // Added a tail to track the least recently used node
  this.map = new Map();
  this.currentLength = 0;
};

LRUCache.prototype._removeNode = function(node) {
  if (node.previous) {
    node.previous.next = node.next;
  } else {
    this.head = node.next;
  }

  if (node.next) {
    node.next.previous = node.previous;
  } else {
    this.tail = node.previous;
  }
};

LRUCache.prototype._addNodeToHead = function(node) {
  node.next = this.head;
  node.previous = null;

  if (this.head) {
    this.head.previous = node;
  }
  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }
};

LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    let fetchedNode = this.map.get(key);

    // Move the accessed node to the head (most recently used)
    this._removeNode(fetchedNode);
    this._addNodeToHead(fetchedNode);

    return Number(fetchedNode.value.split('-')[1]);
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    let fetchedNode = this.map.get(key);

    // Update the value
    fetchedNode.value = `${key}-${value}`;

    // Move the updated node to the head
    this._removeNode(fetchedNode);
    this._addNodeToHead(fetchedNode);
  } else {
    if (this.currentLength === this.maxCapacity) {
      // Remove the least recently used node (tail)
      this.map.delete(Number(this.tail.value.split('-')[0]));
      this._removeNode(this.tail);
      this.currentLength--;
    }

    let createdNode = new DLLNode(`${key}-${value}`);
    this._addNodeToHead(createdNode);
    this.map.set(key, createdNode);
    this.currentLength++;
  }
};