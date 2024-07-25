var decodeString = function(s) {
  let strArr = [], countArr = [], temp = '', index = 0;
  while (index < s.length) {
      if (isNaN(Number(s[index]))) {
          if (s[index] === ']') {
              let x = strArr.pop()
              while(x !== '[') {
                  temp = x + temp
                  let t = strArr.pop()
                  if (t === '[') break
                  x = t
              }
              strArr.push(temp.repeat(countArr.pop()))
              temp = ''
          } else {
              strArr.push(s[index])
          }
      } else {
          if (index === 0 || isNaN(Number(s[index-1]))) {
              countArr.push(s[index])
          } else {
              countArr.push(countArr.pop() + s[index])
          }
      }
      index++;
  }

  return strArr.join('')
};