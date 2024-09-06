function _Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

var copyRandomList = function(head) {
  if (head === null) return null;
  let ptr = head;

  while (ptr) {
      let newNode = new _Node(ptr.val, null, null); // Create new node
      newNode.next = ptr.next; // Link new node's next to original node's next
      ptr.next = newNode; // Link original node to new node
      ptr = newNode.next; // Move to the next original node
  }

  ptr = head;
  while (ptr && ptr.next) {
      ptr.next.random = ptr.random ? ptr.random.next : null;
      ptr = ptr.next.next;
  }

  let oldPtr = head;
  let newHead = head.next;
  let newPtr = newHead;

  while (oldPtr) {
      oldPtr.next = oldPtr.next ? oldPtr.next.next : null;
      newPtr.next = newPtr.next ? newPtr.next.next : null;
      oldPtr = oldPtr.next;
      newPtr = newPtr.next;
  }

  return newHead;
};