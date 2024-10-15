/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// TLE
var subarraysWithKDistinct = function (nums, k) {
  let retval = 0

  let map = new Map()
  let start = 0

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)

    if (map.size > k) {
      while (start <= i && map.size > k) {
        let val = nums[start]
        map.set(val, map.get(val) - 1)

        if (map.get(val) === 0) map.delete(val)
        start++
      }
    }

    // calculate unique Sets
    if (map.size === k) {
      let tStart = start
      let tMap = new Map(map)
      while (tMap.size === k) {
        retval++;
        let tempStartNum = nums[tStart];
        tMap.set(tempStartNum, tMap.get(tempStartNum) - 1);
        if (tMap.get(tempStartNum) === 0) {
          tMap.delete(tempStartNum);
        }
        tStart++;
      }
    }
  }

  return retval
};


var subarraysWithKDistinct = function (nums, k) {
  const atMostK = (k) => {
    let count = 0;
    let start = 0;
    let map = new Map();

    for (let end = 0; end < nums.length; end++) {
      map.set(nums[end], (map.get(nums[end]) || 0) + 1);

      while (map.size > k) {
        let startNum = nums[start];
        map.set(startNum, map.get(startNum) - 1);
        if (map.get(startNum) === 0) {
          map.delete(startNum);
        }
        start++;
      }

      count += end - start + 1;
    }

    return count;
  };

  return atMostK(k) - atMostK(k - 1);
};