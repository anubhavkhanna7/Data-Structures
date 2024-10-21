/**
 * @param {string[]} words
 * @return {string[][]}
 */


class TrieNode {
  constructor() {
    this.children = {};
    this.wordsWithPrefix = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.wordsWithPrefix.push(word);
    }
  }

  getWordsWithPrefix(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    return node.wordsWithPrefix;
  }
}

var wordSquares = function (words) {
  let retval = []
  const trieNode = new Trie()

  for (word of words) {
    trieNode.insert(word)
  }

  const backtrackForWords = (wordList) => {
    if (wordList.length === words[0].length) {
      retval.push([...wordList])
      return
    }

    let prefix = ''
    for (word of wordList) {
      prefix += word[wordList.length]
    }

    const newWordList = trieNode.getWordsWithPrefix(prefix)

    for (newword of newWordList) {
      wordList.push(newword)
      backtrackForWords(wordList)
      wordList.pop()
    }
  }

  for (word of words) backtrackForWords([word])

  return retval
};
