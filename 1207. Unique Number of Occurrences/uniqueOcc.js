var uniqueOccurrences = function(arr) {
  let map = new Map(), i= 0;
  arr.forEach(ele => {
      if (map.has(ele)) {
          map.set(ele, map.get(ele)+1)
      } else {
          map.set(ele, 1);
      }
  })
  const set = new Set(map.values())

  return set.size === map.size
};