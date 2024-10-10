var partition = function (head, x) {
  const newNode = new ListNode(-Infinity, head)
  let nodeT = newNode, nodeC = null
  if (!newNode.next) return newNode.next

  while (nodeT && nodeT.next) {
    if (nodeT.next.val >= x) {
      if (nodeC === null) {
        nodeC = nodeT
      }
      nodeT = nodeT.next
      continue
    }

    if (nodeT.next.val < x && nodeC === null) {
      nodeT = nodeT.next
      continue
    }

    let temp = nodeC.next
    nodeC.next = nodeT.next
    nodeT.next = nodeT.next.next
    nodeC.next.next = temp

    nodeC = nodeC.next
  }

  return newNode.next
};
