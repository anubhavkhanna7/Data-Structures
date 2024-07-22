var reverseWords = function(s) {
  let i = s.length, retVal = [], start = -1;
  while(i >= 0) {
      i--;

      if (s[i] !== ' ' && start === -1 && i !== 0) {
          start = i+1;
      } else if (s[i] === ' ' && start !== -1) {
          retVal.push(s.slice(i+1, start))
          start = -1;
      } else if (s[i] !== ' ' && start !== -1 && i ===0) {
          retVal.push(s.slice(i, start))
      } else if (s[i] !== ' ' && start === -1 && i ===0) {
          retVal.push(s[0])
      }
  }

  return retVal.join(' ')
};

var reverseWords = (string) => {
  let str = string.split(' ').reverse().filter(x => x !== '').join(" ");
  return str;
}