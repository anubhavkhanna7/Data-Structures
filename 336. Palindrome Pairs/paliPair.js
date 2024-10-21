class TrieNode {
  constructor() {
    this.children = {}
    this.endOfWord = false
    this.wordIndex = -1
    this.palindromeRemaining = []
  }
}

var palindromePairs = function (words) {
  const root = new TrieNode()

  const addToTrie = (word, index) => {
    let node = root

    for (let i = word.length - 1; i >= 0; i--) {
      let letter = word[i]
      if (!node.children[letter]) node.children[letter] = new TrieNode()

      // If the remaining part of the word (from start to i) is a palindrome, store the index
      if (isPalindrome(word, 0, i)) {
        node.palindromeRemaining.push(index)
      }

      node = node.children[letter]
    }

    node.endOfWord = true
    node.wordIndex = index
    node.palindromeRemaining.push(index)
  }

  const searchInTrie = (word, index) => {
    let node = root
    const result = []

    for (let i = 0; i < word.length; i++) {
      // If current node is the end of a word and the remaining part of the current word is a palindrome
      if (node.endOfWord && node.wordIndex !== index && isPalindrome(word, i, word.length - 1)) {
        result.push([index, node.wordIndex])
      }

      let letter = word[i]
      if (!node.children[letter]) return result

      node = node.children[letter]
    }

    for (let j of node.palindromeRemaining) {
      if (j !== index) result.push([index, j])
    }

    return result
  }

  const isPalindrome = (word, start, end) => {
    while (start < end) {
      if (word[start] !== word[end]) return false
      start++
      end--
    }
    return true
  }

  for (let i = 0; i < words.length; i++) addToTrie(words[i], i)

  const retval = []

  for (let i = 0; i < words.length; i++) {
    retval.push(...searchInTrie(words[i], i))
  }

  return retval
}
