var mostCommonWord = function(paragraph, banned) {
  const splitStr = paragraph.split(/[!?'.,;\s]+/);
  const bannedSet = new Set(banned)
  const wordMap = new Map()
  let maxWord = ['', 0]

  for (word of splitStr) {
      if (!bannedSet.has(word.toLowerCase())) {
          let newWordCount = (wordMap.get(word.toLowerCase()) || 0) + 1
          wordMap.set(word.toLowerCase(), newWordCount)

          if (newWordCount > maxWord[1]) {
              maxWord = [word.toLowerCase(), newWordCount]
          }
      }
  }

  return maxWord[0]
};