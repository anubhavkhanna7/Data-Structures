function combineLetters(combinations, map, digits) {
  if(digits.length === 0) {
      return combinations;
  }

  if (combinations.length === 0) {
      let digit = digits.shift();
      combinations = combinations.concat(map.get(digit));
  } else {
      let chars = map.get(digits.shift());
      let arr = [];
      combinations.forEach(combination => {
        chars.forEach(char => {
          arr.push(combination + char);
        });
      });
      combinations = arr;
  }
  return combineLetters(combinations, map, digits);
}

var letterCombinations = function(digits) {
  let combinations = [];
  let map = new Map();
  map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);
  digits = digits.split('');
  let array = combineLetters(combinations, map, digits);
  return array;
};