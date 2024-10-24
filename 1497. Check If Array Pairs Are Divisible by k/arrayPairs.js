var canArrange = function (arr, k) {
  const remainderCount = new Map();

  for (let num of arr) {
    let remainder = ((num % k) + k) % k;
    remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
  }

  for (let [remainder, count] of remainderCount.entries()) {
    if (remainder === 0) {
      if (count % 2 !== 0) return false;
    } else {
      let complement = k - remainder;
      if (remainderCount.get(complement) !== count) return false;
    }
  }

  return true;
};