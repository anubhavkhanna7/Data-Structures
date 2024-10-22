/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  let countMap = new Map(), retval = []

  for (str of strings) {
    if (!countMap.has(str.length)) countMap.set(str.length, [])

    countMap.get(str.length).push(str)
  }

  const compareShifting = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const n = str1.length;

    const firstDiff = (str1.charCodeAt(0) - str2.charCodeAt(0) + 26) % 26;

    for (let i = 1; i < n; i++) {
      const currentDiff = (str1.charCodeAt(i) - str2.charCodeAt(i) + 26) % 26;
      if (currentDiff !== firstDiff) {
        return false;
      }
    }

    return true;
  }

  for (lenCount of countMap.keys()) {
    if (lenCount === 1 || countMap.get(lenCount).length === 1) {
      retval.push(countMap.get(lenCount))
      continue
    }

    let countStrings = countMap.get(lenCount), countToCover = countStrings.length, temp = []

    while (countStrings.length > 0) {
      if (countToCover === 0) {
        retval.push([...temp])
        countToCover = countStrings.length
        temp = []
      }

      let str = countStrings.shift()

      if (temp.length === 0) {
        temp.push(str)
        countToCover--
        continue;
      }

      const comparisonString = temp[temp.length - 1]

      if (compareShifting(str, comparisonString)) {
        temp.push(str)
      } else {
        countStrings.push(str)
      }

      countToCover--
    }

    if (temp.length > 0) retval.push([...temp])
  }


  return retval

};