var hasCycle = function(head) {
  while (head !== null) {
      if (isNaN(Number(head.val))) return true
      head.val = 'passed'
      head = head.next
  }
  return false
};