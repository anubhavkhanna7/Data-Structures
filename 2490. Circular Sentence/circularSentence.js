var isCircularSentence = function (sentence) {
  sentence = sentence.split(' ')

  for (let i = 1; i < sentence.length; i++) {
    const previousWord = sentence[i - 1], currentWord = sentence[i]
    if (previousWord[previousWord.length - 1] !== currentWord[0]) return false
  }

  const lastWord = sentence[sentence.length - 1]

  return lastWord[lastWord.length - 1] === sentence[0][0]
};