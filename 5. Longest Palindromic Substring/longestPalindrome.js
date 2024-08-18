var longestPalindrome = function(s) {
  if (s.length < 2) return s

  let maxSubStr = ''
  for(let i = 0; i<s.length;i++) {
      let [l1, r1] = expandFromCenter(s,i,i)
      let [l2, r2] = expandFromCenter(s,i,i+1)

      let currMax = r1 - l1 > r2 - l2 ? s.slice(l1,r1+1) : s.slice(l2,r2+1)

      maxSubStr = maxSubStr.length > currMax.length ? maxSubStr : currMax
  }

  return maxSubStr
};


const expandFromCenter = (string, left, right) => {
  while(left >= 0 && right <string.length && string[left] === string[right]) {
      left--
      right++
  }

  return [left+1, right-1]
}