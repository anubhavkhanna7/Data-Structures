var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  
  while (lists.length > 1) {
      let mergedLists = [];
      
      for (let i = 0; i < lists.length; i += 2) {
          let l1 = lists[i];
          let l2 = i + 1 < lists.length ? lists[i + 1] : null;
          mergedLists.push(mergeTwoLists(l1, l2));
      }
      
      lists = mergedLists;
  }
  
  return lists[0];
};

var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  let current = dummy;
  
  while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }
  
  current.next = l1 !== null ? l1 : l2;
  
  return dummy.next;
};