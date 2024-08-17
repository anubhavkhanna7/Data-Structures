var removeNthFromEnd = function(head, n) {
  let count = 1;
  let x = head;
  let y = head;
  let z = null;
  while(x.next !== null) {
      x = x.next;
      count++;
  }
  let index = count-n, i=0;
  while (i!== index) {
      z = y;
      y = y.next;
      i++;
  }
  if(y.next !== null) {
      y.val = y.next.val;
      y.next = y.next.next;
  } else {
      if(z === null) {
          return null;
      }
      z.next = null;
  }
  
  return head;
};

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1)
    dummy.next = head;
    let first = dummy, second = dummy;
    for (let i=0; i<= n;i++) {
        first = first.next
    }

    while(first) {
        first = first.next
        second = second.next
    }

    second.next = second.next.next

    return dummy.next
};