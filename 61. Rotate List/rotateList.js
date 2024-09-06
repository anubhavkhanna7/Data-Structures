var rotateRight = function(head, k) {
  if (!head || !head.next || k === 0) return head 
  let slowPtr = head, fastPtr = head, count = 0

  while(slowPtr) {
      slowPtr = slowPtr.next
      count++
  }

  k = k%count
  if (k === 0) return head

  while(k > 0) {
      k -= 1
      fastPtr = fastPtr.next
  }

  slowPtr = head

  while(fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next
      fastPtr = fastPtr.next
  }

  let node = slowPtr.next, newHead = slowPtr.next
  slowPtr.next = null

  while(node && node.next) {
      node = node.next
  }

  node.next = head
  head = newHead

  return head
};