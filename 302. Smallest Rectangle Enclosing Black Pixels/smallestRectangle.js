var minArea = function (image, x, y) {
  let smallestx = Infinity, smallesty = Infinity, largestx = -Infinity, largesty = -Infinity

  let traversed = new Set()
  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]
  const convertToIndex = (i, j) => `${i}-${j}`
  const isIndexValid = (i, j) => i >= 0 && j >= 0 && i < image.length && j < image[0].length && image[i][j] == 1

  const traverse = (i, j) => {
    traversed.add(convertToIndex(i, j))
    smallestx = Math.min(smallestx, i)
    smallesty = Math.min(smallesty, j)
    largestx = Math.max(largestx, i)
    largesty = Math.max(largesty, j)

    for ([row, col] of directions) {
      let newI = i + row
      let newJ = j + col

      if (isIndexValid(newI, newJ) && !traversed.has(convertToIndex(newI, newJ))) {
        traverse(newI, newJ)
      }
    }
  }


  traverse(x, y)

  if (largestx == smallestx && largesty === smallesty) return 1

  return (largestx - smallestx + 1) * (largesty - smallesty + 1)
};