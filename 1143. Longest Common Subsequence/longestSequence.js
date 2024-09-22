var longestCommonSubsequence = function(text1, text2) {
  let memo = new Map()
  
  const calculateDepth = (i, j) => {
      if (i<0 || j<0) return 0
      
      let val = `${i}_${j}`
      if (memo.has(val)) return memo.get(val)

      if(text1[i] === text2[j]) {
          memo.set(val, calculateDepth(i-1,j-1)+1)
          return memo.get(val)
      }
      
      memo.set(val, Math.max(calculateDepth(i,j-1), calculateDepth(i-1,j)))
      
      return memo.get(val)
  }
  
  return calculateDepth(text1.length-1, text2.length-1)
};