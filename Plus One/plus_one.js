var plusOne = function(digits) {
  let number = BigInt(digits.join(''));
  number++;
  return number.toString().split('');
};