var checkValidString = function(s) {
  let stackBracket = [], stackStar = []

  for(let i = 0; i<s.length; i++) {
      if (s[i] === '(') {
          stackBracket.push(i)
      } else if (s[i] === '*') {
          stackStar.push(i)
      } else {
          if (stackBracket.length === 0 && stackStar.length === 0) return false
          if (stackBracket.length > 0) {
              stackBracket.pop()
          } else if (stackStar.length > 0) {
              stackStar.pop()
          }
      }
  }

  while (stackBracket.length > 0 && stackStar.length > 0) {
      if (stackBracket[stackBracket.length -1] > stackStar[stackStar.length-1]) return false
      stackBracket.pop()
      stackStar.pop()
  }

  return stackBracket.length === 0
};