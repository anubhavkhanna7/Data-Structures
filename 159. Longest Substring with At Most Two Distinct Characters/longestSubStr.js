var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length < 3) return s.length;

  let map = new Map();
  let maxCount = 0, start = 0;

  for (let end = 0; end < s.length; end++) {
    map.set(s[end], end);

    if (map.size > 2) {
      let minIndex = Math.min(...map.values());
      map.delete(s[minIndex]);
      start = minIndex + 1;
    }

    maxCount = Math.max(maxCount, end - start + 1);
  }

  return maxCount;
};