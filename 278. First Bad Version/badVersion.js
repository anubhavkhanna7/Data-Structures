var solution = function(isBadVersion) {
  return function(n) {
      if (n === 1) return 1;
      if (n === 2) return isBadVersion(1) ? 1 : 2;

      let start = 1, end = n;
      while (start <= end) {
          let mid = Math.floor((start + end) / 2)
          if (isBadVersion(mid)) {
              end = mid-1;
          } else {
              start = mid+1;
          }
      }
      return start;
  };
};