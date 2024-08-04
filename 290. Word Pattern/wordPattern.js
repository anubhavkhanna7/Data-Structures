var wordPattern = function(pattern, s) {
  s = s.split(' ')
  pattern= pattern.split('')

  if ((new Set(pattern)).size !== (new Set(s)).size || s.length !== pattern.length) return false
  let map = new Map()

  for (let i = 0; i<pattern.length; i++) {
      if (!map.has(pattern[i])) {
          map.set(pattern[i],s[i])
      } else {
          if (map.get(pattern[i]) !== s[i]) return false
      }
  }
  return true
};