
var MyLinkedList = function() {
  this.list = null
  this.tail = null
  this.length = 0
};

var createNode = (value, next = null) => {
  return {
      val: value,
      next: next,
  }
}

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (index >= this.length) return -1
  let iter = this.list
  for (let i = 0; i<index; i++) {
      iter= iter.next
  }
  
  return iter.val
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  let node = createNode(val)
  node.next = this.list
  if (this.list === null) {
      this.tail = node
  }
  this.list = node
  this.length++
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  let node = createNode(val)
  if (this.list === null) {
      node.next = this.list
      this.list = node
      this.tail = node
  } else {
      this.tail.next = node
      this.tail = node
  }
  this.length++
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length) return
  if (index === 0) {
      this.addAtHead(val)
      return
  } else if (index === this.length) {
      this.addAtTail(val)
      return
  }

  let iter = this.list
  let node = createNode(val)
  
  for (let i = 0; i<index-1; i++) {
      iter= iter.next
  }
  
  node.next = iter.next
  iter.next = node
  this.length++
  return
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.length) return
  if (index === 0) {
      this.list = this.list.next
      this.length--
      return
  }
  if (index === this.length - 1) {
      let iter = this.list;
      for (let i = 0; i < index - 1; i++) {
          iter = iter.next;
      }
      this.tail = iter;
      this.length--
      return
  }
  let iter = this.list

  for (let i = 0; i<index-1; i++) {
      iter= iter.next
  }
  
  iter.next = iter.next?.next || null
  this.length--
};
