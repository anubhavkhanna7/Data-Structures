var checkIfExist = function(arr) {
  var n = arr.length;
  var flag = false;
  for (var i = 0; i < n; i++) {
    for (var j = i+1; j<= n; j++) {
      if (arr[i] == (arr[j]*2)) {
        flag = true;
        break;
      }
      if (arr[j] == (arr[i]*2)) {
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  return flag;
};