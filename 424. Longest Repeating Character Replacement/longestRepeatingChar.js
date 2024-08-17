var characterReplacement = function(s, k) {
  let maxCount = 0, maxLength = 0;
  let count = new Array(26).fill(0);
  
  for (let start = 0, end = 0; end < s.length; end++) {
      // Update the count of the current character
      count[s.charCodeAt(end) - 65]++;
      
      // Find the maximum frequency of a character in the current window
      maxCount = Math.max(maxCount, count[s.charCodeAt(end) - 65]);
      
      // Calculate the number of characters that need to be replaced
      if (end - start + 1 - maxCount > k) {
          // If replacements exceed k, shrink the window from the left
          count[s.charCodeAt(start) - 65]--;
          start++;
      }
      
      // Update the maximum length of a valid window
      maxLength = Math.max(maxLength, end - start + 1);
  }
  
  return maxLength;
};