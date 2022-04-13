var merge = function(nums1, m, nums2, n) {
  var len = m+n;
  var newLen = m;
  var i;
  var k = 0;
  for (i=0; i<len; i++) {
    if(m != 0 && n != 0) {
      if (nums1[i] < nums2[k]) {
        newLen++;
        m--;
      } else {
        for(var l = len-1; l>=i; l--) {
          nums1[l] = nums1[l-1];
        }
        nums1[i] = nums2[k];
        k++;
        n--;
        newLen++;
      }
    }
    if (m == 0 && n!= 0) {
      for (i=len-n; i<len; i++) {
        nums1[i] = nums2[k];
        k++;
      }
      break;
    } else if (m != 0 && n == 0) {
      break;
    }
  }
};