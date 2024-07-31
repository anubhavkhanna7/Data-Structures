var deleteNode = function(root, key) {
  if (!root) return null
  if (root.val === key && !root.left && !root.right) return null
  let ref = root, prev = root
  // navigate to the node
  while (ref && ref.val !== key) {
      prev = ref
      ref = ref.val > key ? ref.left : ref.right
  }

  // if node not found, return the head
  if(ref === null) return root
  if (!ref.left && ref.right) {
      // if there is no left branch, move up the right branch
      if(prev.val === root.val && prev.val === ref.val) return ref.right
      if (prev.left && prev.left.val === ref.val) {
          prev.left = ref.right
      } else if (prev.right && prev.right.val === ref.val) {
          prev.right = ref.right
      }
  } else if (!ref.right && ref.left) {
      // if there is no right branch, move up the left branch
      if(prev.val === root.val && prev.val === ref.val) return ref.left
      if (prev.left && prev.left.val === ref.val) {
          prev.left = ref.left
      } else if (prev.right && prev.right.val === ref.val) {
          prev.right = ref.left
      }
  } else if (!ref.right && !ref.left) {
      // if there is no left and right branch, replace node with null
      if (prev.left && prev.left.val === ref.val) {
          prev.left = null
      } else if (prev.right && prev.right.val === ref.val) {
          prev.right = null
      }
  } else {
      // replace it with the next biggest node 
      let temp = ref.right, tempPrev = null;
      while (temp.left) {
          tempPrev = temp
          temp = temp.left
      }
      temp.left = ref.left
      if(tempPrev) {
          if (temp.right) {
              tempPrev.left = temp.right
          } else {
              tempPrev.left = null
          }
          temp.right = ref.right
      } else {
          temp.right = ref.right.right
      }
      if (ref.val === root.val) return temp

      if (prev.left && prev.left.val === ref.val) {
          prev.left = temp
      } else if (prev.right && prev.right.val === ref.val) {
          prev.right = temp
      }
  }

  return root

};