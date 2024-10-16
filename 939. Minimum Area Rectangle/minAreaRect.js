var minAreaRect = function (points) {
  let retval = Infinity
  let set = new Set(points.map(([row, col]) => `${row}-${col}`))

  for (let i = 0; i < points.length - 1; i++) {
    const [row, col] = points[i]
    for (let j = i + 1; j < points.length; j++) {
      const [row1, col1] = points[j]
      if (row !== row1 && col !== col1 && set.has(`${row1}-${col}`) && set.has(`${row}-${col1}`)) {
        const length = Math.abs(row1 - row)
        const width = Math.abs(col1 - col)
        retval = Math.min(retval, length * width)
      }

    }
  }

  return retval == Infinity ? 0 : retval
};