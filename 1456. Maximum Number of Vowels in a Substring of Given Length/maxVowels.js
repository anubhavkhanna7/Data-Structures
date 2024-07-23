var maxVowels = function(s, k) {
  let maxCount = 0, currCount = 0;
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  for(let i = 0; i<k; i++) {
      if(set.has(s[i])) {
          maxCount++;
      }
  }
  currCount = maxCount;

  for(let i = k; i<s.length; i++) {
      if (set.has(s[i-k])) currCount--;
      if(set.has(s[i])) currCount++;

      if (currCount > maxCount) {
          maxCount = currCount
      }
  }

  return maxCount
};