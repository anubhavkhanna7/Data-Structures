/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let retval = []

  const isCreatedIPValid = (ipStr) => {
    if (ipStr.startsWith('0') && ipStr.length > 1) return false

    if (Number(ipStr) > 255) return false

    return true
  }

  const createIPAddress = (array, str) => {
    if (str === '') {
      if (array.length < 4) return
      retval.push(array.join('.'))
      return
    }

    if (array.length >= 4 && str !== '') return

    let currentStr = ''

    for (let i = 0; i < Math.min(str.length, 3); i++) {
      currentStr += str[i]
      if (isCreatedIPValid(currentStr)) {
        array.push(currentStr)
        createIPAddress(array, str.slice(i + 1))
        array.pop()
      }
    }
  }

  createIPAddress([], s)

  return retval
};