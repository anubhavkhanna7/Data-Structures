var rotate = function(matrix) {
  let n = matrix.length;
  let x = n-1;
  let n1 = n%2 == 1 ? (n+1)/2 : n/2;
  for(let i=0; i<n1; i++) {
    for(let j=0; j<n/2-n%2; j++) {
      let temp = matrix[x-j][i];
      matrix[x-j][i] = matrix[x-i][x-j];
      matrix[x-i][x-j] = matrix[j][x-i];
      matrix[j][x-i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};