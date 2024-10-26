/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const rowCount = points.length, colCount = points[0].length

  if (rowCount === 1) return Math.max(...points[0])

  let prevRow = [...points[0]];

  for (let i = 1; i < rowCount; i++) {
    const left = Array(colCount).fill(-Infinity);
    const right = Array(colCount).fill(-Infinity);
    const currRow = Array(colCount).fill(-Infinity);

    left[0] = prevRow[0];
    for (let j = 1; j < colCount; j++) {
      left[j] = Math.max(left[j - 1] - 1, prevRow[j]);
    }

    right[colCount - 1] = prevRow[colCount - 1];
    for (let j = colCount - 2; j >= 0; j--) {
      right[j] = Math.max(right[j + 1] - 1, prevRow[j]);
    }

    for (let j = 0; j < colCount; j++) {
      currRow[j] = points[i][j] + Math.max(left[j], right[j]);
    }

    prevRow = currRow;
  }

  return Math.max(...prevRow);

  // TLE
  // const matrix = new Array(rowCount).fill(0).map(() => new Array(colCount).fill(-Infinity))

  // for(let i = 0; i<colCount; i++) {
  //     matrix[0][i] = points[0][i]
  // }

  // for(let i = 0; i<rowCount-1; i++) {
  //     for(let j = 0; j<colCount; j++) {
  //         const item  = matrix[i][j]

  //         for(let k = 0; k < colCount; k++) {
  //             matrix[i+1][k] = Math.max(matrix[i+1][k], item+points[i+1][k] - Math.abs(j-k))
  //         }
  //     }
  // }

  // return Math.max(...matrix[rowCount-1])
};