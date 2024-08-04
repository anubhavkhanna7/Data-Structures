var isIsomorphic = function(s, t) {
  // return (new Set(s.split(''))).size === (new Set(t.split(''))).size
  if (s.length !== t.length) return false
  let mapS = new Map(), mapT = new Map()
  for (let i = 0; i<s.length; i++) {
      if (!mapS.has(s[i]) && !mapT.has(t[i])) {
          mapS.set(s[i], t[i])
          mapT.set(t[i], s[i])
      } else if (!mapS.has(s[i]) || !mapT.has(t[i])){
          return false
      } else if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) {
          return false
      }
  }
  return true
};