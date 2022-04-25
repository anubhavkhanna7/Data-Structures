var deleteDuplicates = function(head) {
  if (head === null) return head;
  let currentNode = head;
  let previousNode = null;
  while(currentNode !== null) {
    let temporaryNode = currentNode.next;
    let duplicatesPresent = false;
    while (temporaryNode!== null && temporaryNode.val === currentNode.val) {
      duplicatesPresent = true;
      temporaryNode = temporaryNode.next;
    }
    if(duplicatesPresent) {
      if(previousNode === null) {
        head = temporaryNode;
        previousNode = null;
        currentNode = temporaryNode;
      } else {
        previousNode.next = temporaryNode;
        currentNode = temporaryNode;        
      }
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return head;
};