var topKFrequent = function(nums, k) {
  let map = new Map()
  nums.forEach(num => {
      if (map.has(num)) {
          map.set(num, map.get(num)+1)
      } else {
          map.set(num, 1)
      }
  })

  let list = [], finalRet = []
  for(const value of map) {
      list.push(value)
  }

  list = list.sort((mapValue1, mapValue2) => {
      return mapValue2[1] - mapValue1[1]
  })

  for(let i = 0; i< k;i++) {
      finalRet.push(list[i][0])
  }
  return finalRet
};