var reverseBits = function(n) {
  n = n.toString(2).split('').reverse()
  if (n.length < 32) {
      n.push(...new Array(32 - n.length).fill(0))
  }
  n = n.join('')

  return parseInt(n,2)
};