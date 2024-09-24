var insert = function(head, insertVal) {
  const node = new _Node(insertVal, null)

  if (!head) {
      node.next = node
      return node
  }

  let current = head
  while(current.next !== head) {
      // onoing sequence
      if (current.val < insertVal && current.next.val >= insertVal) break

      // pivot
      if (current.val > current.next.val && current.next.val >= insertVal) break

      // pivot but element is max
      if (current.val > current.next.val && current.next.val < insertVal &&  current.val < insertVal) break

      current = current.next
  }

  node.next = current.next
  current.next = node

  return head
};