var backspaceCompare = function (s, t) {
  let str1 = '', str2 = '', count1 = 0, count2 = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      count1++
      continue
    } else if (count1 > 0) {
      count1--
      continue
    }
    str1 += s[i]
  }

  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] === '#') {
      count2++
      continue
    } else if (count2 > 0) {
      count2--
      continue
    }
    str2 += t[i]
  }


  return str1 === str2
};