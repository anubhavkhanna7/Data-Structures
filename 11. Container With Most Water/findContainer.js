var maxArea = function(height) {
  let maxArea = 0, left_index=0, right_index = height.length-1;
  while (left_index<j) {
    let x_axis = right_index-left_index;
    let y_axis;
    if (height[left_index] < height[left_index]) {
      y_axis = height[left_index];
      left_index++;
    } else {
      y_axis = height[right_index];
      right_index--;
    }
    if(maxArea < (x_axis * y_axis)) {
      maxArea = x_axis * y_axis;
    }
  }
  return maxArea;
};

// Easier Solution
var maxArea = function(height) {
  let l = 0, r = height.length -1, maxVal = 0;
  while (l<r) {
      const vol = (r-l)*Math.min(height[l], height[r])
      maxVal = vol > maxVal ? vol : maxVal

      if (height[l] < height[r]) {
          l++
      } else {
          r--
      }
  }
  return maxVal
};