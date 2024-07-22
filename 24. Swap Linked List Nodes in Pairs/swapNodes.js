var swapPairs = function(head) {
  let currentNode = head;
  while ( currentNode !== null && currentNode.next !== null) {
    let temp = currentNode.val;
    currentNode.val = currentNode.next.val;
    currentNode.next.val = temp;
    currentNode = currentNode.next.next;
  }
  return head;
};