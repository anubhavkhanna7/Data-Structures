var reverseString = function(s) {
  let n = s.length;
  for (let i = 0; i<s.length/2; i++) {
    let temp = s[i];
    s[i] = s[n-1-i];
    s[n-1-i] = temp;
  }
  return;
};