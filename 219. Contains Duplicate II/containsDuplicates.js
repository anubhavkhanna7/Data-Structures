var containsNearbyDuplicate = function(nums, k) {
  if (nums.length === 1) return false
  let map = new Map()

  for(let i =0; i< nums.length; i++) {
      if (!map.has(nums[i])) {
          map.set(nums[i], i)
      } else {
          console.log(i, map.get(nums[i]), Math.abs(i - map.get(nums[i])))
          if (Math.abs(i - map.get(nums[i])) <= k) {
              return true
          } else {
              map.set(nums[i], i)
          }
      }
  }

  return false
};