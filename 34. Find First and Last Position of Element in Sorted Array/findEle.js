var searchRange = function(nums, target) {
  const findFirst = () => {
      let start = 0, end = nums.length - 1;
      while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          if (nums[mid] === target) {
              if (mid === 0 || nums[mid - 1] !== target) {
                  return mid;
              } else {
                  end = mid - 1;
              }
          } else if (nums[mid] < target) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      }
      return -1;
  };

  const findLast = () => {
      let start = 0, end = nums.length - 1;
      while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          if (nums[mid] === target) {
              if (mid === nums.length - 1 || nums[mid + 1] !== target) {
                  return mid;
              } else {
                  start = mid + 1;
              }
          } else if (nums[mid] < target) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      }
      return -1;
  };

  let first = findFirst();
  if (first === -1) return [-1, -1];
  let last = findLast();
  return [first, last];
};