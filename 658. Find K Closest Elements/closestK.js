var findClosestElements = function (arr, k, x) {
  if (arr[arr.length - 1] <= x) return arr.slice(arr.length - k)

  let prevIndex = -1, nextIndex = 0

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= x && arr[i + 1] > x) {
      prevIndex = i
      nextIndex = i + 1
      break
    }
  }

  const isIndexValid = (index) => index >= 0 && index < arr.length

  let retval = []
  while (retval.length < k) {
    if (!isIndexValid(prevIndex)) {
      retval.push(arr[nextIndex])
      nextIndex++
    } else if (!isIndexValid(nextIndex)) {
      retval.unshift(arr[prevIndex])
      prevIndex--
    } else if (Math.abs(x - arr[prevIndex]) > Math.abs(x - arr[nextIndex])) {
      retval.push(arr[nextIndex])
      nextIndex++
    } else {
      retval.unshift(arr[prevIndex])
      prevIndex--
    }
  }

  return retval
};