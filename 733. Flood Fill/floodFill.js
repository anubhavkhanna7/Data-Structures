var floodFill = function (image, sr, sc, color) {
  const baseColor = image[sr][sc]

  if (baseColor === color) return image
  const queue = [[sr, sc]]

  const isIndexValid = (i, j) => (i >= 0 && j >= 0 && i < image.length && j < image[0].length)
  const availableDirections = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  while (queue.length) {
    let [row, col] = queue.shift()
    image[row][col] = color

    for (let i = 0; i < availableDirections.length; i++) {
      let newRow = row + availableDirections[i][0]
      let newCol = col + availableDirections[i][1]

      if (isIndexValid(newRow, newCol) && image[newRow][newCol] === baseColor) {
        queue.push([newRow, newCol])
      }
    }
  }

  return image
};