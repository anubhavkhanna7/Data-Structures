/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  let stringCounterMap = new Map(), maxCounter = -1;

  const checkIfSubStringSpecial = (string) => {
    let start = 0, end = string.length - 1
    const commonChar = string[start]
    while (start <= end) {
      if (string[start] !== commonChar || string[end] !== commonChar) return false
      start++
      end--
    }

    return true
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substring = s.slice(i, j);
      if (!checkIfSubStringSpecial(substring)) continue
      let count = stringCounterMap.get(substring) || 0;
      stringCounterMap.set(substring, count + 1);

      if (stringCounterMap.get(substring) >= 3) {
        maxCounter = Math.max(maxCounter, substring.length);
      }
    }
  }

  return maxCounter;
};
