function primeFactors(number, lastPrime, primes)
{
  let start = 2;
  while(number > 1)
  {
    if(start > lastPrime && number > lastPrime) {
      return false;
    }

    if(number % start == 0){
      if(!primes.includes(start)) {
        return false
      }
      while (number % start === 0) {
        number /= start;
      }
    }
    if(start === 2) {
      start++;
    } else {
      start += 2;
    }
  }
  return true;
}

var nthSuperUglyNumber = function(n, primes) {
  let lastPrime = primes[primes.length -1];
  let startValue = 2;
  while (n>1) {
    let isUgly = primeFactors(startValue, lastPrime, primes);
    if(isUgly) {
      n--;
    }
    startValue++;
  }
  return startValue-1;
};

// Alternate Approach

function primeFactors(number, lastPrime)
{
  let factors = new Set();
  let start = 2;
  while(number > 1)
  {
    if(number % start == 0){
      if (!factors.has(start)) {
        factors.add(start);
      }
      number /= start;
    }
    else start++;
  }
  return [...factors];
}

var nthSuperUglyNumber = function(n, primes) {
  let lastPrime = primes[primes.length -1];
  primes = new Set(primes);
  let start = 2;
  while (n>1) {
    let factors = primeFactors(start, lastPrime);
    let isUgly = factors.filter(element => !primes.has(element)).length === 0;
    if(isUgly) {
      n--;
    }
    start++;
  }
  return start-1;
};

// Alternate Approach

function isPrime(number) {
  if(number === 2) { return true; }
  if(number %2 === 0) {
    return false;
  }

  for (let i = 3; i<= Math.sqrt(number); i+= 2) {
    if(number %i === 0) {
      return false;
    }
  }
  return true;
}

function isUgly(number, primes) {
  let start = 2;
  while (number >= 2) {
    if(number % start === 0 && isPrime(start)) {
      if(primes.indexOf(start) === -1) {
        return false;
      }
      number = number/start;
    } else {
      if(start === 2) {
        start++;
      } else {
        start += 2;
      }
    }
  }
  return true;
}

var nthSuperUglyNumber = function(n, primes) {
  let start = 2;
  while (n > 1) {
    if (isUgly(start, primes)) {
      n--;
    }
    start++;
  }
  return start-1;
};