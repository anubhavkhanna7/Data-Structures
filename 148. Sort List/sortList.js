var sortList = function (head) {
  if (!head || !head.next) return head;

  const divideList = (node) => {
    if (!node || !node.next) return node;

    let slow = node, fast = node, prev = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = null;

    let left = divideList(node);
    let right = divideList(slow);

    return mergeList(left, right);
  }

  const mergeList = (node1, node2) => {
    let dummy = new ListNode();
    let tail = dummy;

    while (node1 && node2) {
      if (node1.val <= node2.val) {
        tail.next = node1;
        node1 = node1.next;
      } else {
        tail.next = node2;
        node2 = node2.next;
      }
      tail = tail.next;
    }

    tail.next = node1 ? node1 : node2;

    return dummy.next;
  }

  return divideList(head);
};