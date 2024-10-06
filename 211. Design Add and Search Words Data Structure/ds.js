class TrieNode {
  constructor() {
      this.children = {}
      this.endOfWord = false
  }
}

var WordDictionary = function() {
  this.root = new TrieNode()
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let node = this.root

  for (char of word) {
      if (!node.children[char]) {
          node.children[char] = new TrieNode()
      }
      node = node.children[char]
  }
  node.endOfWord = true
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  const searchInNode = (node, searchWord) => {
      for(let i = 0; i<searchWord.length; i++) {
          const char = searchWord[i]
          if (char !== '.') {
              if (!node.children[char]) return false
              node = node.children[char]
          } else {
              if (node.children) {
                  for (testNode in node.children) {
                      if (searchInNode(node.children[testNode], searchWord.slice(i+1))) return true
                  }
              }
              return false
          }
      }
      return node.endOfWord
  }


  return searchInNode(this.root, word)
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/