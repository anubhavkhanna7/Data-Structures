var nextGreaterElement = function(nums1, nums2) {
  let map = new Map(), highest = 0
  let retval = []
  nums2.forEach((ele, index) => {
      map.set(ele, index)
      highest = Math.max(highest, ele)
  })

  nums1.forEach(element => {
      let value = -1
      if (element !== highest) {
          for(let i = map.get(element) +1; i<nums2.length; i++) {
              if(nums2[i] > element) {
                  value = nums2[i]
                  break;
              }
          }
      }
      retval.push(value)
  })
  return retval
};

var nextGreaterElement = function(nums1, nums2) {
  let map = new Map(), highest = 0
  let retval = []
  nums2.forEach((ele, index) => {
      map.set(ele, index)
      highest = Math.max(highest, ele)
  })

  for (let i = 0; i< nums1.length; i++) {
      let value = -1
      if (nums1[i] !== highest) {
          for(let j = map.get(nums1[i]) +1; j<nums2.length; j++) {
              if(nums2[j] > nums1[i]) {
                  value = nums2[j]
                  break;
              }
          }
      }
      nums1[i] = value
  }
  return nums1
};