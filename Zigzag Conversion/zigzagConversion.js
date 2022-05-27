var convert = function(stringPattern, numRows) {
  if (numRows === 1) {
    return stringPattern;
  }

  // creating a map for row wise mapping of characters
  let map = new Map();
  for (let iterator = 0; iterator < numRows; iterator++) {
    map.set(iterator, []);
  }

  stringPattern = stringPattern.split('');

  let arrayIndex = 0, isArrayTrendPositive = true;
  stringPattern.forEach(character => {
    if(isArrayTrendPositive) {
      // if array index out of bounds and trend is positive
      // make trend negative and reverse the traversal direction
      // else keep increasing the index iterator

      if(arrayIndex === numRows) {
        isArrayTrendPositive = false;
        arrayIndex -= 2;
        let tempArray = map.get(arrayIndex);
        tempArray.push(character);
        map.set(arrayIndex, tempArray);
        arrayIndex--;
      } else {
        let tempArray = map.get(arrayIndex);
        tempArray.push(character);
        map.set(arrayIndex, tempArray); 
        arrayIndex++;
      }
    } else {
      // if array index out of bounds and trend is negative
      // make trend positive and reverse the traversal direction
      // else keep decreasing the index iterator

      if(arrayIndex < 0) {
        isArrayTrendPositive = true;
        arrayIndex += 2;
        let tempArray = map.get(arrayIndex);
        tempArray.push(character);
        map.set(arrayIndex, tempArray);
        arrayIndex++;
      } else {
        let tempArray = map.get(arrayIndex);
        tempArray.push(character);
        map.set(arrayIndex, tempArray);
        arrayIndex--;
      }
    }
  });

  let zigzagString = '';
  [...map.values()].forEach(valueArray => {
      zigzagString += valueArray.join('')
  });

  return zigzagString;
};