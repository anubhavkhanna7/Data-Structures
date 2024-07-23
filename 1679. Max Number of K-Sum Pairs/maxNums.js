var maxOperations = function(nums, k) {
  let pairCount = 0;
  const map = new Map()
  nums.forEach(num => {
      if (num <k) {
          if (map.has(k-num)) {
              pairCount++;
              if (map.get(k-num) > 1) {
                  map.set(k-num, map.get(k-num)-1);
              } else {
                  map.delete(k-num);
              }
          } else if (map.has(num)) {
              map.set(num, map.get(num) + 1)
          } else {
              map.set(num, 1)
          }
      }
  })
  return pairCount
};