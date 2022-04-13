var duplicateZeros = function(arr) {
  let x;
  let y;
  const len = arr.length;
  for (x = 0; x<len; x++) {
    if (arr[x] == 0) {
      for (y = len-1; y>x+1; y--) {
        arr[y] = arr[y-1];
      }
      if (x != len -1) {
        arr[x+1]=0;
      }
      x++;
    }
  }
};