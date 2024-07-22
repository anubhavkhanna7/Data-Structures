var mergeAlternately = function(word1, word2) {
  let i = 0, str = [];
  while (i < word1.length && i < word2.length) {
      str.push(word1[i], word2[i])
      i++;
  }
  if (i < word1.length) {
      str.push(word1.slice(i))
  } else if (i < word2.length) {
      str.push(word2.slice(i))
  }

  return str.join('');
};