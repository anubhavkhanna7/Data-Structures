var removeStars = function(s) {
  let newStr='', starCount = 0
  s = s.split('')
  while (s.length > 0) {
      let char = s.pop()
      if (char === '*') {
          starCount++;
      } else {
          if (starCount > 0) {
              starCount--;
          } else {
              newStr = char + newStr
          }
      }
      
  }
  return newStr;
};