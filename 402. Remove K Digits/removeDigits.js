var removeKdigits = function (nums, k) {
  let stack = []

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > nums[i] && k > 0) {
      stack.pop()
      k--
    }
    stack.push(nums[i])
  }

  while (k > 0 && stack.length > 0) {
    stack.pop()
    k--
  }

  while (stack.length > 0 && stack[0] == 0) {
    stack.shift()
  }

  return stack.length === 0 ? '0' : stack.join('')
};