var minLength = function (s) {
  if (s.length < 2) return s.length
  let stack = [s[0]]

  for (let i = 1; i < s.length; i++) {
    stack.push(s[i])

    while (stack.length > 0) {
      const lastTwoChar = stack.slice(-2).join('')
      if (lastTwoChar === 'AB' || lastTwoChar === 'CD') {
        stack.pop()
        stack.pop()
      } else break
    }
  }

  return stack.length
};

var minLength = function (s) {
  if (s.length < 2) return s.length

  while (s.includes('AB') || s.includes('CD')) {
    if (s.includes('AB')) {
      s = s.replaceAll('AB', '')
    } else {
      s = s.replaceAll('CD', '')
    }
  }

  return s.length
};