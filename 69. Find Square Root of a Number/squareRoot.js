var mySqrt = function(squaredValue) {
  let high = Math.ceil(squaredValue/2), low =1;
  if (squaredValue === 0) {return 0;}
  if (squaredValue === 1) {return 1;}
  if (low === high) {
    return low;
  }

  while (low < high) {
    let mid = Math.ceil((low + high)/2);
    let squared = mid * mid;
    if(squared < squaredValue) {
      let alternateSquare = (mid+1) * (mid+1);
      if (squaredValue < alternateSquare) {
        return mid;
      } else if (squaredValue === alternateSquare) {
        return mid+1;
      }
      low = mid;
    } else if (squaredValue === squared) {
        return mid;
    } else {
      let alternateSquare = (mid-1) * (mid-1);
      if (squaredValue > alternateSquare) {
        return mid-1;
      } else if (squaredValue === alternateSquare) {
        return mid-1;
      }
      high = mid;
    }
  }
}