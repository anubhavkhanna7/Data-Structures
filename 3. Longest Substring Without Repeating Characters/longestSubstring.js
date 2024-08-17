var lengthOfLongestSubstring = function(str) {
  if (str.length < 2) return str.length
  let map = new Map(), maxCount = 0, start = 0

  for(let i = 0; i< str.length; i++) {
      //duplicate found inside the substring
      if(map.has(str[i]) && map.get(str[i]) >= start) {
          maxCount = Math.max(maxCount, i-start)

          // set new start position
          start = map.get(str[i])+1
      } else {
          // update Max count
          maxCount = Math.max(maxCount, i-start+1)
      }

      // update last known position for found element
      map.set(str[i], i)
  }

  return maxCount
};