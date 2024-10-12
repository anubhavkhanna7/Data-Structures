var numTilings = function (n) {
  const mod = BigInt(1000000007);
  if (n === 1) return 1;
  if (n === 2) return 2;

  let domPrev = BigInt(1);
  let domCurr = BigInt(2);
  let partPrev = BigInt(1);

  for (let i = 3; i <= n; i++) {
    let temp = domCurr;
    domCurr = (domCurr + domPrev + BigInt(2) * partPrev) % mod;
    partPrev = (partPrev + domPrev) % mod;
    domPrev = temp;
  }

  return Number(domCurr);
};