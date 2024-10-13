var reverseBetween = function (head, start, end) {
  let top = new ListNode(0, head);
  let prev = top, ptr = head;
  let counter = 1;

  if (!head.next) return head;
  if (start === end) return head;

  while (counter < start) {
    prev = ptr;
    ptr = ptr.next;
    counter++;
  }

  let first = prev;
  let second = ptr;

  let temp = null;
  while (counter <= end) {
    let next = second.next;
    second.next = temp;
    temp = second;
    second = next;
    counter++;
  }

  first.next.next = second;
  first.next = temp;

  return top.next;
};
