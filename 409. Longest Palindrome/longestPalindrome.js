var longestPalindrome = function (s) {
  let map = new Map();

  // Count occurrences of each character
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let length = 0;
  let hasOdd = false;

  // Calculate the length of the longest palindrome
  for (let count of map.values()) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      hasOdd = true;
    }
  }

  // If there's any odd count, we can add 1 to the center of the palindrome
  if (hasOdd) length += 1;

  return length;
};
