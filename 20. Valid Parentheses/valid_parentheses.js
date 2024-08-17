var isValid = function(s) {
  let array  = [];
  for (let i = 0; i< s.length; i++) {
    if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
      array.push(s[i]);
    } else if (s[i] === ')') {
      if (array.length === 0 || array[array.length-1] !== '(') return false;
      array.pop();
    } else if (s[i] === '}') {
      if (array.length === 0 || array[array.length-1] !== '{') return false;
      array.pop();
    } else {
      if (array.length === 0 || array[array.length-1] !== '[') return false;
      array.pop();
    }
  } 
  return array.length === 0;
};

// Alternative Way

var isValid = function(s) {
  if (s.length === 1) return false;
  s = s.split('');
  for (let i = 0; i< s.length;) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
          i++;
      } else {
          if (
              i === 0 ||
              (s[i-1] === '(' && s[i] !== ')') ||
              (s[i-1] === '[' && s[i] !== ']') ||
              (s[i-1] === '{' && s[i] !== '}')
          ) return false;
          s.splice(i-1, 2);
          i--;
      }
  } 
  return s.length === 0;
};

// Another Way

var isValid = function(s) {
  const arr = [];
  for (let i = 0; i< s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
          arr.push(s[i]);
      } else {
          const val = arr.pop();
          if (
              (val === '(' && s[i] !== ')') ||
              (val === '[' && s[i] !== ']') ||
              (val === '{' && s[i] !== '}') ||
              !val
          ) return false;
      }
  } 
  return arr.length === 0;
};

var isValid = function(s) {
  let stack = [], startSet = new Set(['(', '{', '[']), closeMap = new Map([
      [')', '('],
      [']', '['],
      ['}', '{']
  ]);

  for (let i = 0; i< s.length; i++) {
      if (startSet.has(s[i])) {
          stack.push(s[i])
      } else if (stack[stack.length-1] !== closeMap.get(s[i])) {
              return false
      } else {
          stack.pop()
      }
  }

  return stack.length === 0
};