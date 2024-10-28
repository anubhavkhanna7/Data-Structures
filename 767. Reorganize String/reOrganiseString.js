/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  let map = new Map(), maxCount = 0

  for (char of s) {
    map.set(char, (map.get(char) || 0) + 1)
    maxCount = Math.max(maxCount, map.get(char))
  }

  if (maxCount > Math.ceil(s.length / 2)) return ''

  let list = []
  const updatedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  for (key of updatedMap.keys()) {
    for (let i = 0; i < updatedMap.get(key); i++) {
      list.push(key)
    }
  }

  list.reverse()

  let start = 0, retval = new Array(s.length)

  while (list.length > 0) {
    if (start >= s.length) {
      start = 1
    }

    retval[start] = list.pop()
    start += 2
  }

  return retval.join('')

};