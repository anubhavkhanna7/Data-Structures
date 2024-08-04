var evalRPN = function(tokens) {
  let stack = []

  tokens.forEach(token => {
      if (isNaN(Number(token))) {
          let num1 = stack.pop(), num2 = stack.pop()
          if (token === '+') {
              stack.push(num2+num1)
          } else if (token === '-') {
              stack.push(num2-num1)
          } else if (token === '*') {
              stack.push(num2*num1)
          } else {
              if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) {
                  stack.push(Math.floor(num2/num1))
              } else {
                  stack.push(Math.ceil(num2/num1))
              }
          }
      } else {
          stack.push(Number(token))
      }
  })

  return stack[0]
};