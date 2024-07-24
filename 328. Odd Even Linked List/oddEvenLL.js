var oddEvenList = function(head) {
  let evenHolder = null, iter = head, evenIter = null;
  if (head && iter.next !== null) {
      while (iter.next) {
          if (evenHolder === null) {
              evenHolder = iter.next;
              evenIter = evenHolder;
              iter.next = iter.next.next
          } else {
              evenIter.next = iter.next
              evenIter = evenIter.next;
              iter.next = iter.next.next
          }
          if (iter.next) {
              iter = iter.next
          } else {
              break
          }
      }
      evenIter.next = null
      iter.next = evenHolder
  }
  return head
};