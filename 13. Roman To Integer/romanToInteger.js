var romanToInt = function(romanNumber) {
  romanNumber = romanNumber.split('');

  // creating a map with all numeral values
  let map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M',1000);

  let sumOfDigits = 0, lenOfArray = romanNumber.length-1;
  while (lenOfArray>=0) {
    let currentValue = map.get(romanNumber[lenOfArray]);
    if(lenOfArray > 0) {
      let previousValue = map.get(romanNumber[lenOfArray-1]);
      if(currentValue <= previousValue) {
        sumOfDigits += currentValue;
      } else {
        sumOfDigits += (currentValue - previousValue);
        // subtracting am extra index to accomodate for the clubbed numeral value
        lenOfArray--;
      }
    } else {
      sumOfDigits += currentValue;
    }
    lenOfArray--;
  }
  return sumOfDigits;
};