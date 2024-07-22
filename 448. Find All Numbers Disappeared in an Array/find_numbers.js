var findDisappearedNumbers = function(nums) {
  var arr = []
  for (var i = 1; i<=nums.length; i++) {
    if (nums.indexOf(i) == -1) {
      arr.push(i);
    }
  }
  return arr;
};