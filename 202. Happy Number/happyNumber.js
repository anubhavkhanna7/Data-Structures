function returnSumOfDigits(arrayOfDigits) {
  let sum = 0;
  arrayOfDigits.forEach(digit => sum+= (digit*digit));
  if (sum < 10) {
    return sum ===1 || sum === 7;
  } else {
    let number = (""+sum).split('');
    number = number.map(digit => parseInt(digit));
    return returnSumOfDigits(number);
  }
}

var isHappy = function(number) {
  let arrayOfDigits = (""+number).split('');
  arrayOfDigits = arrayOfDigits.map(digit => parseInt(digit));
  return returnSumOfDigits(arrayOfDigits);
};