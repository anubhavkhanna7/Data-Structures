var uniquePathsWithObstacles = function(obstacleGrid) {
  let altArr = new Array(obstacleGrid.length).fill(0).map(() => new Array(obstacleGrid[0].length).fill(0));
  altArr[0][0] = 1;

  for (let i = 0; i<obstacleGrid.length; i++) {
      for (let j = 0; j<obstacleGrid[0].length; j++) {
          if (obstacleGrid[i][j] === 1) {
              altArr[i][j] = 0
          } else {
              // rightmost corner elements
              if (j === obstacleGrid[0].length-1) {
                  if (i !== obstacleGrid.length-1) {
                      altArr[i+1][j] += altArr[i][j]
                  }
              } else {
                  // bottom row elements
                  if (i === obstacleGrid.length-1) {
                      altArr[i][j+1] += altArr[i][j]
                  } else {
                      altArr[i][j+1] += altArr[i][j]
                      altArr[i+1][j] += altArr[i][j]
                  }
              }
          }
      }
  }
  return altArr[obstacleGrid.length-1][obstacleGrid[0].length-1]
};