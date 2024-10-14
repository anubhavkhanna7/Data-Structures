var kWeakestRows = function (mat, k) {
  let arr = []

  for (let i = 0; i < mat.length; i++) {
    let count = 0
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j]) count++
    }
    arr.push([i, count])
  }

  arr.sort((a, b) => a[1] === b[1] ? b[0] - a[0] : b[1] - a[1])
  let retval = []
  while (k > 0) {
    retval.push(arr.pop()[0])
    k--
  }
  return retval
};