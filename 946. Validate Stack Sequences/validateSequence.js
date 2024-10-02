var validateStackSequences = function (pushed, popped) {
  let stack = [], startIndex = 0

  while (pushed.length) {
    stack.push(pushed.shift())

    if (stack.length > 0 && stack[stack.length - 1] === popped[startIndex]) {
      while (stack.length > 0 && stack[stack.length - 1] === popped[startIndex]) {
        stack.pop()
        startIndex++
      }
    }
  }

  return popped.length === startIndex
};