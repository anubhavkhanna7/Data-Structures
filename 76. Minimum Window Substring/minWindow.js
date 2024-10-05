/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return ''

  let subStrMap = new Map();
  for (let i = 0; i < t.length; i++) {
    subStrMap.set(t[i], (subStrMap.get(t[i]) || 0) + 1);
  }

  let visited = new Map();
  let minLen = Infinity, start = 0, minStart = 0;
  let captured = 0;

  for (let end = 0; end < s.length; end++) {
    let charEnd = s[end];
    visited.set(charEnd, (visited.get(charEnd) || 0) + 1);

    if (subStrMap.has(charEnd) && visited.get(charEnd) === subStrMap.get(charEnd)) {
      captured++;
    }

    // Try to shrink the window when all characters from t are satisfied
    while (captured === subStrMap.size) {
      // Update minimum window length
      const len = end - start + 1
      if (len < minLen) {
        minLen = len;
        minStart = start;
      }

      // Shrink the window by moving the start pointer
      let charLeft = s[start];
      visited.set(charLeft, visited.get(charLeft) - 1);

      if (subStrMap.has(charLeft) && visited.get(charLeft) < subStrMap.get(charLeft)) {
        captured--;
      }

      start++;
    }
  }

  return minLen === Infinity ? '' : s.slice(minStart, minStart + minLen);
};
