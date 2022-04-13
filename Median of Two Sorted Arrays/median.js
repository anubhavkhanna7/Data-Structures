var findMedianSortedArrays = function(nums1, nums2) {
  let mergedArray = [];
  while(nums1.length !== 0 && nums2.length!==0) {
      if (nums1[0] < nums2[0]) {
          mergedArray.push(nums1.shift());
      } else {
          mergedArray.push(nums2.shift());
      }
  }
  if(nums1.length !== 0) {
      while(nums1.length !== 0) {
          mergedArray.push(nums1.shift());
      }
  }
  if(nums2.length !== 0) {
      while(nums2.length !== 0) {
          mergedArray.push(nums2.shift());
      }
  }
  if (mergedArray.length % 2 === 1) {
      let index = (mergedArray.length -1)/2;
      return mergedArray[index];
  } else {
      let index = ((mergedArray.length)/2) - 1;
      let index1 = (mergedArray.length)/2;
      let value = (mergedArray[index] + mergedArray[index1])/2;
      return value;
  }
};