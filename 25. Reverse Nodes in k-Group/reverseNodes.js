var reverseKGroup = function(head, k) {
  let count = 0;
  let ptr = head;

  while (ptr && count < k) {
      ptr = ptr.next;
      count++;
  }
  if (count < k) return head;

  let prev = null, curr = head;    
  for (let i = 0; i < k; i++) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
  }

  head.next = reverseKGroup(curr, k);
  return prev;
};