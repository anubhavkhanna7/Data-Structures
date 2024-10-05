var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    let [currentWord, count] = queue.shift();

    if (currentWord === endWord) return count;

    for (let i = 0; i < currentWord.length; i++) {
      for (let charCode = 97; charCode <= 122; charCode++) {  // 'a' to 'z'
        let newWord = currentWord.slice(0, i) + String.fromCharCode(charCode) + currentWord.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, count + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
};