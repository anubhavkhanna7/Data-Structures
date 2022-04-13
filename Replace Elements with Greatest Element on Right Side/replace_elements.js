var getMaxIndex = function(index, arr) {
  var maxIndex = index;
  for (var i = index; i<=arr.length-1; i++) {
    if (arr[maxIndex] < arr[i]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

var replaceElements = function(arr) {
  var base = 0;
  var max = -1;
  var len = arr.length;
  while (base < len) {
    if (base == len-1) {
      arr[base] = -1;
      break;
    }
    max = getMaxIndex(base, arr);
    for (var j = base; j< max; j++) {
      arr[j] = arr[max];
    }
    arr[max] = 0;
    base = max;
  }
  return arr;
};