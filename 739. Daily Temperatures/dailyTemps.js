var dailyTemperatures = function(temperatures) {
  let stack = [], retval = new Array(temperatures.length).fill(0)

  for (let i = temperatures.length-1; i>=0; i--) {
      if (stack.length === 0) {
          retval[i] = 0
          stack.push([temperatures[i], i])
      } else {
          let nextHigherFound = false
          while(stack.length) {
              if (stack[stack.length-1][0] <= temperatures[i]) {
                  stack.pop()
              } else {
                  nextHigherFound = true
                  retval[i] = stack[stack.length-1][1]-i
                  stack.push([temperatures[i], i])
                  break;
              }
          }

          if(!nextHigherFound) {
              stack.push([temperatures[i], i])
              retval[i] = 0
          }
      }
  }

  return retval
};