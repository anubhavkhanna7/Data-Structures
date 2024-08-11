var minimumTotal = function(triangle) { 
  for (let i = 0; i< triangle.length-1; i++) {
      let temp = new Array(triangle.length).fill(null)
      // calculate updated values and move them to temp array
      for (let j = 0; j<triangle[i].length; j++) {
          if (temp[j] === null) {
              temp[j] = triangle[i+1][j] + triangle[i][j]
          } else {
              temp[j] = Math.min(temp[j], (triangle[i+1][j] + triangle[i][j]))
          }
          if (temp[j+1] === null) {
              temp[j+1] = triangle[i+1][j+1] + triangle[i][j]
          } else {
              temp[j+1] = Math.min(temp[j+1], (triangle[i+1][j+1] + triangle[i][j]))
          }
      }
      // calculate min possible values for each row and rewrite triangle
      for (let j = 0; j<=triangle[i].length; j++) {
          triangle[i+1][j] = temp[j]
      }
  }

  return Math.min(...triangle[triangle.length-1])
};

var minimumTotal = function(triangle) {
    for (let i = triangle.length - 2; i>=0; i--) {
        for (let j = 0; j<triangle[i].length; j++) {
            triangle[i][j] = Math.min(triangle[i][j] + triangle[i+1][j], triangle[i][j] + triangle[i+1][j+1])
        }
    }

    return triangle[0][0]
}