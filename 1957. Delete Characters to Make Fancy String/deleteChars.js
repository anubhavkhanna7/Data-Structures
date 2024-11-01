/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let str = ''

  if (s.length < 3) return s
  str += s[0] + s[1]

  for (let i = 2; i < s.length; i++) {
    if (s[i] === str[str.length - 1] && str[str.length - 1] === str[str.length - 2]) continue;
    str += s[i]
  }

  return str
};