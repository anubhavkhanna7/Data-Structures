var findRestaurant = function(list1, list2) {
  let map1 = new Map()
  let map2 = new Map()
  let min = Infinity, retval = []

  for (let i = 0; i<list1.length; i++) {
      map1.set(list1[i], i)
  }

  for (let i = 0; i<list2.length; i++) {
      map2.set(list2[i], i)
  }

  for (key of map1.keys()) {
      if (map2.has(key)) {
          min = Math.min(min, map1.get(key) + map2.get(key))
      }
  }

  for (key of map1.keys()) {
      if (map2.has(key) && (map1.get(key) + map2.get(key)) === min) {
          retval.push(key)
      }
  }

  return retval
};