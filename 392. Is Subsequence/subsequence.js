var isSubsequence = function(s, t) {
  let a = 0, b = 0;
  while (b < t.length && a < s.length) {
      if (s[a] === t[b]) {
          a++;
      }
      b++
  }
  return a === s.length
};