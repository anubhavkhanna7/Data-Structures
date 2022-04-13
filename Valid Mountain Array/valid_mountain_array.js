var validMountainArray = function(arr) {
  var peak_reached = false;
  var valid = true;
  if (arr.length <=2) {
    return false;
  }
  for (var i = 0; i<= arr.length; i++) {
    if (!peak_reached && arr[i] >= arr [i+1] && i!= 0) {
      peak_reached = true;
    }
    if (peak_reached) {
      if (arr[i] <= arr [i+1]) {
        valid = false;
        break;
      }
    } else {
      if (arr[i] >= arr [i+1]) {
        valid = false;
        break;
      }
    }
  }
  if (peak_reached) {
    return valid;
  } else {
    return false;
  }
};