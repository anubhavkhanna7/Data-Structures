var detectCycle = function(head) {
  let fastNode = head, slowNode = head;

  while(fastNode) {
      fastNode = fastNode.next?.next
      slowNode = slowNode.next

      if (fastNode === slowNode) {
          slowNode = head
          while(slowNode !== fastNode) {
              slowNode = slowNode.next
              fastNode = fastNode.next
          }
          return slowNode
      }
  }
  return null
};