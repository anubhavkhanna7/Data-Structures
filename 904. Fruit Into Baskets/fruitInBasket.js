var totalFruit = function (fruits) {
  let start = 0
  const map = new Map()
  let maxCount = 0

  for (let i = 0; i < fruits.length; i++) {
    map.set(fruits[i], (map.get(fruits[i]) || 0) + 1)

    while (map.size > 2) {
      map.set(fruits[start], map.get(fruits[start]) - 1)

      if (map.get(fruits[start]) === 0) map.delete(fruits[start])
      start++
    }

    maxCount = Math.max(i - start + 1, maxCount)
  }

  return maxCount
};