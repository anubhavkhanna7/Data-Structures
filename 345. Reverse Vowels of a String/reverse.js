var reverseVowels = function(s) {
  const set = new Set(['a', 'A', 'E', 'e', 'i', 'I', 'o', 'O', 'u', 'U']);
  s = s.split('')
  let i = 0, e = s.length-1;
  while(i<e) {
      if (!set.has(s[i]) && !set.has(s[e])) {
          i++;
          e--;
      } else if (!set.has(s[i])) {
          i++;
      } else if (!set.has(s[e])) {
          e--;
      } else {
          const temp = s[i]
          s[i] = s[e]
          s[e] = temp
          i++;
          e--;
      }
  }
  return s.join('')
};