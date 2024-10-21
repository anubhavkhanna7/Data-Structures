class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

var replaceWords = function (dictionary, sentence) {
  const root = new TrieNode();

  const addWordToTrie = (word) => {
    let node = root;
    for (let letter of word) {
      if (!node.children[letter]) {
        node.children[letter] = new TrieNode();
      }
      node = node.children[letter];
    }
    node.endOfWord = true;
  };

  const returnWordFromDictionary = (word) => {
    let currentWord = [], node = root;

    for (let letter of word) {
      if (!node.children[letter]) break

      currentWord.push(letter);
      node = node.children[letter];
      if (node.endOfWord) return currentWord.join('');
    }

    return word;
  };

  for (let word of dictionary) addWordToTrie(word)

  sentence = sentence.split(' ');
  for (let i = 0; i < sentence.length; i++) sentence[i] = returnWordFromDictionary(sentence[i])

  return sentence.join(' ');
};
