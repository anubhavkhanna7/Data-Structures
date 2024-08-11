var wordBreak = function(s, wordDict, memo={}) {
    
  if (s in memo) return memo[s]
  if (s === '') return true

  for(let word of wordDict) {
      if (s.indexOf(word) === 0) {
          let checkMakeWord = wordBreak(s.slice(word.length), wordDict, memo)
          if (checkMakeWord === true) {
              memo[s] = true
              return true
          }
      }
  }

  memo[s] = false
  return false
};