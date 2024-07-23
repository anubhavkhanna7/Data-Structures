var compress = function (chars) {
  let i = 1, pos = 0, count = 1;
  for (i; i < chars.length; i++) {
      if (chars[i] !== chars[i - 1]) {
          if (count !== 1) {
              chars[pos] = chars[i - 1]
              pos++;
              const countStr = String(count).split('')
              countStr.forEach((val, index) => {
                  chars[pos + index] = val
              })
              pos = pos + countStr.length -1
          } else {
              chars[pos] = chars[i - 1]
          }
          pos++;
          count = 1;
      } else {
          count++;
      }
  }
  if (count > 1) {
      chars[pos] = chars[i - 1];
      pos++;
      const countStr = String(count).split('');
      countStr.forEach((val, index) => {
          chars[pos + index] = val
      })
      pos = pos + countStr.length -1
  } else {
      chars[pos] = chars[i - 1];
  }
  return pos + 1
};