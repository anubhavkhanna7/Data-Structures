var strStr = function(haystack, needle) {
  let presentIndex = -1;
  haystack = haystack.split('');
  needle = needle.split('');
  if(needle.length === 0) {
      return 0;
  }
  if(needle.length > haystack.length) {
      return -1;
  }
  let i = 0, j=0;
  while (i<haystack.length) {
      if(j=== needle.length) {
          break;
      }
      if(haystack[i] === needle[j]) {
          if(j === 0) {
              presentIndex = i;
          }
          j++;
      } else {
          j = 0;
          if(presentIndex !== -1) {
            i = presentIndex;
          }
          presentIndex = -1;
      }
      i++;
  }
  if(j !== needle.length && presentIndex !== -1) {
      return -1;
  }
  return presentIndex;
};