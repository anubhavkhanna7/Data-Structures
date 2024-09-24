/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
  let iter = head

  console.log(head)

  const flattenChildren = (node) => {
      let iter = node
      iter.next = iter.child
      iter.next.prev = iter
      iter.child = null
      iter = iter.next

      while(iter) {
          if (iter.child) {
              let temp = iter.next
              iter = flattenChildren(iter)
              iter.next = temp
              if (iter.next) {
                  iter.next.prev = iter
              }
          }

          if (iter.next) {
              iter = iter.next
          } else {
              break
          }
      }

      return iter
  }
  
  while(iter) {
      if (iter.child) {
          let temp = iter.next
          iter = flattenChildren(iter)
          iter.next = temp
          if (iter.next) {
              iter.next.prev = iter
          }
      }
      iter = iter.next
  }

  return head
};