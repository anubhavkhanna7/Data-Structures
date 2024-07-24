var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const map1 = new Map()
  const map2 = new Map()

  for (let i = 0; i < word1.length; i++) {
      if (map1.has(word1[i])) {
          map1.set(word1[i], map1.get(word1[i]) + 1)
      } else {
          map1.set(word1[i], 1)
      }

      if (map2.has(word2[i])) {
          map2.set(word2[i], map2.get(word2[i]) + 1)
      } else {
          map2.set(word2[i], 1)
      }
  }

  if(map1.size !== map2.size) return false
  for (const item of map1.keys()) {
      if (!map2.has(item)) return false
  }

  let m1v = [...map1.values()], m2v = [...map2.values()], tempcheck = true
  m1v.forEach(val => {
      let index = m2v.indexOf(val)
      if (index === -1) tempcheck = false
      m2v.splice(index, 1)
  })

  return tempcheck
};