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

var intersect = function(nums1, nums2) {
  let map = new Map(), map1 = new Map(), inter = [];
  nums1.forEach((ele) => {
      if(map.has(ele)) {
          map.set(ele, map.get(ele) + 1);
      } else {
          map.set(ele, 1);
      }
  });

  nums2.forEach((ele) => {
      if(map1.has(ele)) {
          map1.set(ele, map1.get(ele) + 1);
      } else {
          map1.set(ele, 1);
      }
  });

  map.forEach((val, key) => {
      if(map1.has(key)) {
          let times = val <= map1.get(key) ? val : map1.get(key);
          while(times > 0) {
              inter.push(key);
              times--;
          } 
      }
  });
  return inter;
};