var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1), set2 = new Set(nums2);
  if (set1.size < set2.size) {
      for(const item of set1) {
          if (set2.has(item)) {
              set1.delete(item)
              set2.delete(item)
          }
      }
  } else {
      for(const item of set2) {
          if (set1.has(item)) {
              set1.delete(item)
              set2.delete(item)
          }
      }
  }

  return [[...set1], [...set2]]
};