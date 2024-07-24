var reverseList = function(head) {
  if (head !== null) {
      let first = head, second = head.next;

      while (second) {
          let temp = second.next
          second.next = first
          first = second
          second = temp
      }
      head.next = null
      head = first
  }

  return head
};