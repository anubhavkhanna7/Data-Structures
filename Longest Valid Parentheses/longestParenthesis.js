var longestValidParentheses = function(stringOfParenthesis) {
  let array = [], currentCount = 0, maxCount = 0, index=0, backtrackIndex = 0;

  // splitting into array of strings
  stringOfParenthesis = stringOfParenthesis.split('');

  stringOfParenthesis.forEach(paranthesis => {
    if(paranthesis === '(') {
      array.push(paranthesis);
    } else {
      backtrackIndex = index-1;
      let matchFound = false;

      // checking for presence of a start paranthesis
      while (backtrackIndex >= 0) {
        if(array[backtrackIndex] === '(') {
          array[backtrackIndex] = '';
          array.push('');
          matchFound = true;
          break;
        }
        backtrackIndex--;
      }
      if(!matchFound) {
        array.push(')');
      }
    }
    index++;
  });
  array.forEach(element => {
    if(element === '') {
      currentCount++;
    } else {
      if (currentCount> maxCount) {
        maxCount = currentCount;
      }
      currentCount = 0;
    }
  });
  if (currentCount> maxCount) {
    maxCount = currentCount;
  }
  return maxCount;
};