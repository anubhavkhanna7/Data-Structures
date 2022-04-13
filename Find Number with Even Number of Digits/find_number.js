var oddOrNot = function(input) {
  return (input%2);
}

var countDigits = function(input) {
  var count = 1;
  while (input >= 10) {
    input = input/10;
    count++;
  }
  return count;
}

var findNumbers = function(nums) {
  var evenCount = 0;
  var digitCount = [];
  nums.forEach((num) => {
    digitCount.push(countDigits(num));
  });
  digitCount.forEach((digit) => {
    if(!oddOrNot(digit)) {
      evenCount++;
    }
  });
  return evenCount;
};