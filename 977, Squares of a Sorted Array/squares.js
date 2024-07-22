var sortedSquares = function(nums) {
  var array = [];
  nums.forEach( (e) => {
    array.push(e*e);
  })
  return array.sort((a,b) => { return (a - b);});
};