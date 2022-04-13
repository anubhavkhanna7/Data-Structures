var heightChecker = function(heights) {
  var arr = [];
  var count = 0;
  heights.forEach((ele) => { arr.push(ele)});
  for (var i = 0; i < arr.length -1; i++) {
    for (var j = i+1; j<arr.length; j++) {
      if(arr[i] > arr[j]) {
        var temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== heights[i]) {
      count++;
    }
  }
  return count;
};