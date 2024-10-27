/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let bracketCount = 0
  s = s.split('')

  for (let i = 0; i < s.length; i++) {
    if (bracketCount <= 0 && s[i] === ')') {
      s[i] = ''
    } else if (s[i] === '(') {
      bracketCount++
    } else if (s[i] === ')') {
      bracketCount--
    }
  }

  if (bracketCount === 0) return s.join('')

  bracketCount = 0

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ')') {
      bracketCount++
    } else if (bracketCount > 0 && s[i] === '(') {
      bracketCount--
    } else if (s[i] === '(') {
      s[i] = ''
    }
  }

  return s.join('')
};