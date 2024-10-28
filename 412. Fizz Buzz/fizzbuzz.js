var fizzBuzz = function (n) {
  const retval = []

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      retval.push('FizzBuzz')
    } else if ((i + 1) % 3 === 0) {
      retval.push('Fizz')
    } else if ((i + 1) % 5 === 0) {
      retval.push('Buzz')
    } else {
      retval.push(`${i + 1}`)
    }
  }

  return retval
};