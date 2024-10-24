/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  const operationsStack = []
  const valuesStack = []

  const operationsList = new Set(['&', '|', '!'])

  const performOperation = (expressionValues, operation) => {
    if (operation === '!') return expressionValues[0] === 't' ? 'f' : 't'

    if (operation === '&') {
      for (let i = 0; i < expressionValues.length; i++) {
        if (expressionValues[i] === 'f') return 'f'
      }
      return 't'
    } else {
      for (let i = 0; i < expressionValues.length; i++) {
        if (expressionValues[i] === 't') return 't'
      }
      return 'f'
    }
  }

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === ',') continue
    if (operationsList.has(expression[i])) {
      operationsStack.push(expression[i])
    } else if (expression[i] !== ')') {
      valuesStack.push(expression[i])
    } else {
      // end of expression
      const valuesList = []
      let currentValue = valuesStack.pop()
      while (currentValue !== '(') {
        valuesList.push(currentValue)
        currentValue = valuesStack.pop()
      }
      valuesStack.push(performOperation(valuesList, operationsStack.pop()))
    }
  }

  return valuesStack[0] === 't'
};