var deleteMiddle = function(head) {
  let iter = head, fastiter = head;
  if (head.next === null) return null
  while(fastiter) {
      if (fastiter.next.next === null || fastiter.next.next.next === null) {
          iter.next = iter.next.next;
          break;
      }
      iter = iter.next;
      fastiter = fastiter.next.next;
  }

  return head
};