var lastRemaining = function(n) {
  let retval = 1;
  let step = 1;
  let leftDirection = true;

  while (n > 1) {
      if (leftDirection || n % 2 === 1) {
          retval += step;
      }
      
      step *= 2;
      n = Math.floor(n / 2);
      leftDirection = !leftDirection;
  }

  return retval;
};