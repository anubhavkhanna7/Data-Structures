var countOfPairs = function (n, x, y) {
  let result = new Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let directDist = Math.abs(i - j);
      let detourDist = Math.min(
        Math.abs(i - x) + 1 + Math.abs(y - j),
        Math.abs(i - y) + 1 + Math.abs(x - j)
      );

      let minDist = Math.min(directDist, detourDist);

      result[minDist - 1] += 2;
    }
  }

  return result;
};
