class LinkedListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var MyCircularDeque = function (k) {
  this.head = null;
  this.tail = null;
  this.elementCount = 0;
  this.maxAllowed = k;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.elementCount === this.maxAllowed) return false;

  let node = new LinkedListNode(value);

  if (this.elementCount === 0) {
    this.head = node;
    this.tail = node;
    this.tail.next = this.head; // circular reference
  } else {
    node.next = this.head;
    this.head = node;
    this.tail.next = this.head; // maintain circular reference
  }

  this.elementCount++;
  return true;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.elementCount === this.maxAllowed) return false;

  let node = new LinkedListNode(value);

  if (this.elementCount === 0) {
    this.head = node;
    this.tail = node;
    this.tail.next = this.head; // circular reference
  } else {
    this.tail.next = node;
    this.tail = node;
    this.tail.next = this.head; // maintain circular reference
  }

  this.elementCount++;
  return true;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function () {
  if (this.elementCount === 0) return false;

  if (this.elementCount === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.tail.next = this.head; // maintain circular reference
  }

  this.elementCount--;
  return true;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function () {
  if (this.elementCount === 0) return false;

  if (this.elementCount === 1) {
    this.head = null;
    this.tail = null;
  } else {
    // Traverse the list to find the node before the tail
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = this.head;
    this.tail = current; // update tail
  }

  this.elementCount--;
  return true;
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getFront = function () {
  if (this.elementCount === 0) return -1;

  return this.head.val;
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function () {
  if (this.elementCount === 0) return -1;

  return this.tail.val;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function () {
  return this.elementCount === 0;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function () {
  return this.elementCount === this.maxAllowed;
};

/** 
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/
