var generateParenthesis = function(n) {
  let retval = []

  const createParanthesis = (paranString, openingLeft, closingLeft) => {
    if (openingLeft === 0 && closingLeft === 0) {
      retval.push(paranString)
      return
    }
    
    // Ensure that opening parentheses are added if available
    if (openingLeft > 0) {
      createParanthesis(paranString + '(', openingLeft - 1, closingLeft)
    }

    // Ensure that closing parentheses are added if valid (closingLeft > openingLeft)
    if (closingLeft > openingLeft) {
      createParanthesis(paranString + ')', openingLeft, closingLeft - 1)
    }
  }
  
  
  createParanthesis('', n, n)
  return retval
};