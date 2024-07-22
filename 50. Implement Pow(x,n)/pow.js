var myPow = function(number, power) {
  // checking if power is 0
  if(power === 0) {
    return 1;
  }

  // check if power is 1
  if(power === 1) {
    return number;
  }

  //  check if value is 1
  if(number === 1) {
    return number;
  }

  // check if value is -1
  if(number === -1) {
    if(power%2 === 0) {
      return 1;
    } else {
      return -1;
    }
  }
  
  let isPowerNegative = (power<0) ;
  if (isPowerNegative) {
    power *= -1;
  }

  let multiplier = 1;
  while (power>0) {
    multiplier *= number;
    power--;
  }
  
  if(isPowerNegative) {
    multiplier = 1.0/multiplier;
  }
  return multiplier;
}; 