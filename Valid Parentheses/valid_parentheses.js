var isValid = function(s) {
  let str = s.split('');
  let stack = [], i = 0;

  while (i < str.length) {
      if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
        stack.push(str[i]);
      } else if (str[i] === ')') {
        if(stack.length === 0) {return false;}
        if (stack[stack.length - 1] === '(') {
            stack.pop();
        } else { return false; }
      } else if (str[i] === '}') {
        if(stack.length === 0) {return false;}
          if (stack[stack.length - 1] === '{') {
            stack.pop();
        } else { return false; }
      } else if (str[i] === ']') {
        if(stack.length === 0) {return false;}
          if (stack[stack.length - 1] === '[') {
            stack.pop();
        } else { return false; }
      }
      i++;
  }

  if(stack.length !== 0) {
      return false;
  }
  return true;
};