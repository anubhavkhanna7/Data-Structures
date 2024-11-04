/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let previousChar = '', currentCount = 0, retval = ''

  for (let char of word) {
    if (previousChar === '') {
      previousChar = char
      currentCount = 1

      continue
    }

    if (previousChar === char && currentCount < 9) {
      currentCount++
    } else if (previousChar === char) {
      retval += `${currentCount}${previousChar}`
      currentCount = 1
    } else {
      retval += `${currentCount}${previousChar}`
      previousChar = char
      currentCount = 1
    }
  }

  retval += `${currentCount}${previousChar}`

  return retval
};