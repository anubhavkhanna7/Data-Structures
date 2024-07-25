var asteroidCollision = function(asteroids) {
  let arr = [], negArr = [];
  while(asteroids.length > 0) {
      const val = asteroids.pop();
      if (val > 0) {
          if (negArr.length === 0) arr.push(val)
          else {
              let isEqual = false
              while(negArr.length) {
                  const negVal = negArr.pop() * -1;
                  if (negVal > val) {
                      negArr.push(negVal*-1)
                      break;
                  } else if (negVal === val) {
                      isEqual = true;
                      break;
                  }
              }
              if (!negArr.length && !isEqual) arr.push(val)
          }
      } else  {
          negArr.push(val)
      }
  }
  return [...arr, ...negArr].reverse()
};