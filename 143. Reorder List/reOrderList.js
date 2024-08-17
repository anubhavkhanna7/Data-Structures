var reorderList = function(head) {
  if (!head || !head.next) return head
  let iter = head, fastIter = head

  while(fastIter && fastIter.next) {
      iter = iter.next
      fastIter = fastIter.next.next
  }

  // reverse Nodes
  let prev = null, curr = iter, temp;
  while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
  }

  // Merge the two halves
  let first = head, second = prev;
  while (second.next) {
      temp = first.next;
      first.next = second;
      first = temp;

      temp = second.next;
      second.next = first;
      second = temp;
  }


};