var addTwoNumbers = function(l1, l2) {
  let rl1 = l1
  let rl2 = l2

  let finalList = new ListNode(0, null), carry = 0
  let nodeitr = finalList
  while(rl1 || rl2) {
      let val = nodeitr.val
      if (rl1) {
          val += rl1.val
          rl1 = rl1.next
      }
      if (rl2) {
          val += rl2.val
          rl2 = rl2.next
      }

      nodeitr.val = val%10
      carry = val > 9 ? 1 : 0
      if (rl1 || rl2 || carry > 0) {
          nodeitr.next = new ListNode(carry, null)
          nodeitr = nodeitr.next
      }
  }

  return finalList
};