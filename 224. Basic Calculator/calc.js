var calculate = function(s) {
  let stack = [], operator = '', currNumber = null;

  for (let i = 0; i<s.length; i++) {
      if(s[i] !== ' ') {
          if (isNaN(Number(s[i]))) {
              if (s[i] !== ')') {
                  stack.push(s[i])
              } else {
                  let x = stack.pop(), arr = []
                  while(x !== '(') {
                      arr.unshift(x)
                      x = stack.pop()
                  }
                  stack.push(calculateArr(arr))
                  arr = []
                  currNumber = null
                  operator = ''
              }
          } else {
              if (!isNaN(Number(stack[stack.length-1]))) {
                  stack.push(stack.pop()*10 + Number(s[i]))
              } else {
                  stack.push(Number(s[i]))
              }
          }
      }
  }
  currNumber = calculateArr(stack)
  return currNumber
};

const calculateArr = (array) => {
  let currNumber = null, operator = ''
  array.forEach(ele => {
      if (isNaN(Number(ele))) {
          operator = ele
      } else if (currNumber === null) {
          if (operator === '-') {
              currNumber = 0 - ele
          } else {
              currNumber = ele
          }
      } else {
          if (operator === '+') {
              currNumber += ele
          } else {
              currNumber -= ele
          }
          operator = ''
      }
  })
  return currNumber
}