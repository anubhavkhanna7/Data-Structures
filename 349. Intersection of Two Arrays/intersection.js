var intersection = function(nums1, nums2) {
  let inter = [];
  nums1.forEach((ele) => {
    if(nums2.indexOf(ele) !== -1 && inter.indexOf(ele) === -1) {
      inter.push(ele);
    }
  });

  return inter;
};

var intersection = function(nums1, nums2) {
  let inter = new Set(), set = new Set(nums2);
  nums1.forEach((ele) => {
    if(set.has(ele)) {
      inter.add(ele);
    }
  });

  return [...inter];
};

var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1), set2 = new Set(nums2), inter = [];
  set1.forEach((ele) => {
    if(set2.has(ele)) {
      inter.push(ele);
    }
  });

  return inter;
};