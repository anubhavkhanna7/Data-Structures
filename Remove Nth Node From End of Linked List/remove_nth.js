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