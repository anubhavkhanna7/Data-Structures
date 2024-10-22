var removeInvalidParentheses = function (s) {
  let openToRemove = 0, closeToRemove = 0;

  for (let char of s) {
    if (char === '(') {
      openToRemove++;
    } else if (char === ')') {
      if (openToRemove > 0) {
        openToRemove--;
      } else {
        closeToRemove++;
      }
    }
  }

  const isExpressionValid = (expression) => {
    let count = 0;
    for (let char of expression) {
      if (char === '(') {
        count++;
      } else if (char === ')') {
        count--;
      }
      if (count < 0) return false;
    }
    return count === 0;
  };

  let retval = new Set();

  const createExpression = (expression, startIndex, openToRemove, closeToRemove) => {
    if (openToRemove === 0 && closeToRemove === 0) {
      if (isExpressionValid(expression)) {
        retval.add(expression);
      }
      return;
    }

    for (let i = startIndex; i < expression.length; i++) {
      if (i > startIndex && expression[i] === expression[i - 1]) continue;

      if (openToRemove > 0 && expression[i] === '(') {
        createExpression(
          expression.slice(0, i) + expression.slice(i + 1),
          i,
          openToRemove - 1,
          closeToRemove
        );
      }

      if (closeToRemove > 0 && expression[i] === ')') {
        createExpression(
          expression.slice(0, i) + expression.slice(i + 1),
          i,
          openToRemove,
          closeToRemove - 1
        );
      }
    }
  };

  createExpression(s, 0, openToRemove, closeToRemove);

  return retval.size === 0 ? [''] : [...retval];
};
