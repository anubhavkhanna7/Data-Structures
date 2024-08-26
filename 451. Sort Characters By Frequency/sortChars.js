var frequencySort = function(s) {
  let map = new Map();

  for (let char of s) {
      map.set(char, (map.get(char) || 0) + 1);
  }

  let sortedChars = [...map.entries()].sort((a, b) => b[1] - a[1]);

  let retval = '';
  for (let [char, count] of sortedChars) {
      retval += char.repeat(count);
  }

  return retval;
};

var frequencySort = function(s) {
  let map = new Map(), retval = ''
  for (let i = 0; i< s.length; i++) {
      if (map.has(s[i])) {
          map.set(s[i], map.get(s[i])+1)
      } else {
          map.set(s[i], 1)
      }
  }
  let sortedChars = [...map].sort((a,b) => b[1] - a[1])

  for(let item of sortedChars) {
      retval += item[0].repeat(item[1])
  }
  return retval
};