var findContentChildren = function(g, s) {
  g.sort((a,b) => a-b)
  s.sort((a,b) => a-b)

  let count = 0, i = 0, j = 0
  while(i<g.length && j <s.length) {
      if (s[j] >= g[i]) {
          count++
          i++
      }
      j++
  }
  return count 
};