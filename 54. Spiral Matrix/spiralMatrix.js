var spiralOrder = function(matrix) {
  let startX = 0, startY = 0, boundaryX = matrix.length -1, boundaryY = matrix[0].length -1, outputArr = []

  while(startX <= boundaryX && startY <= boundaryY) {
      // top: left to right
      for (let j = startY; j <= boundaryY; j++) {
          if (matrix[startX][j] !== null) {
              outputArr.push(matrix[startX][j])
              matrix[startX][j] = null
          }
      }
      startX++
      // right: top to bottom
      for (let i = startX; i <= boundaryX; i++) {
          if(matrix[i][boundaryY] !== null) {
              outputArr.push(matrix[i][boundaryY])
              matrix[i][boundaryY] = null
          }
      }
      boundaryY--
      // bottom: right to left
      for (let j = boundaryY; j >= startY; j--) {
          if (matrix[boundaryX][j] !== null) {
              outputArr.push(matrix[boundaryX][j])
              matrix[boundaryX][j] = null
          }
      }
      boundaryX--
      // left: bottom to top
      for (let i = boundaryX; i >= startX; i--) {
          if (matrix[i][startY] !== null) {
              outputArr.push(matrix[i][startY])
              matrix[i][startY] = null
          }
      }
      startY++
  }

  return outputArr
};