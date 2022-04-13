var intersect = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let set;
  if(set1.size < set2.size) {
    set = set1;
  } else {
    set = set2;
  }
  let i = 0;
  let inter = [];
  [...set].forEach(element => {
    let count1 = nums1.filter(z => z === element).length;
    let count2 = nums2.filter(z => z === element).length;
    let count = count1 > count2 ? count2 : count1;
    while(count>0) {
      count--;
      inter.push(element);
    }
  });
  return inter;
};