var kthGrammar = function(n, k) {
  if (n === 1) return 0
  
  let parent = kthGrammar(n-1, Math.ceil(k/2))

  if(parent) {
      return k%2
  }
  return 1 - k%2
};