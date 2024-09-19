var isAdditiveNumber = function(num) {
  let strLen = num.length

  const isSequenceValid = (num1, num2, numString) => {
    if (numString === '') return true

    let sum = BigInt(num1) + BigInt(num2)

    if (!numString.startsWith(sum)) return false

    return isSequenceValid(num2, sum, numString.slice(sum.toString().length))
  }

  for(let i = 1; i<=Math.floor(strLen/2); i++) {
    // index 0 - i is the first number
    if (num[0] === '0' && i>1) break;

    for (let j = i+1; j< strLen; j++) {
      // index i - j is the second number
      if (num[i] === '0' && j-i > 1) break;

      const num1 = num.slice(0,i)
      const num2 = num.slice(i,j)

      if(isSequenceValid(num1, num2, num.slice(j))) return true
    }
  }

  return false
};