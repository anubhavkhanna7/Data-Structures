var isPalindrome = function(s) {
  let updatedString = s.toLowerCase().split('').filter(ele => /^([0-9a-zA-Z])$/.test(ele));
  let len = updatedString.length - 1;
  let i = 0, isPali = true;
  while(i<updatedString.length/2) {
    if(updatedString[i] !== updatedString[len - i]) {
      isPali = false;
      break;
    }
    i++;
  }
  return isPali;
};