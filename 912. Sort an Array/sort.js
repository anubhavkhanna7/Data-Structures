var sortArray = function(nums) {
  if (nums.length === 1) return nums
  
  let mid = Math.floor(nums.length / 2)
  const left = sortArray(nums.slice(0, mid))
  const right = sortArray(nums.slice(mid, nums.length))
  
  return mergeArrays(left, right)
};

const mergeArrays = (arr1, arr2) => {
  let i = 0, j = 0, retval = []
  
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          retval.push(arr1[i])
          i++
      } else {
          retval.push(arr2[j])
          j++
      }
  }
  
  // Append remaining elements from arr1 or arr2
  retval.push(...arr1.slice(i))
  retval.push(...arr2.slice(j))
  
  return retval
}