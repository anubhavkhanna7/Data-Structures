var deleteDuplicates = function(head) {
  if (head===null) return head;
  let currentNode = head;
  while (currentNode.next !== null) {
    let tempNode = currentNode.next; 
    if (currentNode.val === tempNode.val) {
      currentNode.next = tempNode.next;
    }
    else{
      currentNode = currentNode.next;
    }
  }
  return head;
};

// Alternate Method

var deleteDuplicates = function(head) {
  let currentNode = head;
  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.val === currentNode.next.val) {
      let node = currentNode;
      while (node !== null && node.val === currentNode.val) {
        node = node.next;
      }
      currentNode.next = node;
    }
    currentNode = currentNode.next
  }
  return head;
};