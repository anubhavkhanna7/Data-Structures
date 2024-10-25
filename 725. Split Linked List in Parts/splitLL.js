var splitListToParts = function (head, k) {
  let lengthOfList = 0

  let pointer = head

  while (pointer) {
    lengthOfList++

    pointer = pointer.next
  }

  let remainder = lengthOfList % k, countInEachSet = Math.floor(lengthOfList / k)

  const retval = Array(k).fill(null)
  pointer = head

  for (let i = 0; i < k; i++) {
    const maxIterationCount = countInEachSet + (remainder > 0 ? 1 : 0)
    let node = pointer

    for (let j = 0; j < maxIterationCount - 1; j++) {
      if (pointer === null) break
      pointer = pointer.next
    }

    if (pointer) {
      let temp = pointer ? pointer.next : null
      pointer.next = null
      pointer = temp
    }

    retval[i] = node
    if (remainder > 0) remainder--
  }

  return retval
};