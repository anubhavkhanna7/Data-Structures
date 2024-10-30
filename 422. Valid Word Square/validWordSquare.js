var validWordSquare = function (words) {
  for (let i = 0; i < words.length; i++) {
    let word1 = words[i], word2 = ''

    for (let j = 0; j < words[i].length; j++) {
      word2 += words?.[j]?.[i] || ''
    }

    if (word2 !== word1) return false
  }

  return true
};