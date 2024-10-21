class TrieNode {
  constructor() {
    this.children = {};
    this.sentences = new Map();
  }
}

class AutocompleteSystem {
  constructor(sentences, times) {
    this.root = new TrieNode();
    this.currentSearch = '';
    this.currentNode = this.root;

    for (let i = 0; i < sentences.length; i++) {
      this.addSentence(sentences[i], times[i]);
    }
  }

  // Add a sentence to the Trie
  addSentence(sentence, time) {
    let node = this.root;
    for (let char of sentence) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.sentences.set(sentence, (node.sentences.get(sentence) || 0) + time);
    }
  }

  // Get top 3 hot sentences given a node and its sentence map
  getTop3(node) {
    let sortedSentences = [...node.sentences.entries()].sort((a, b) => {
      // Sort by frequency (hot degree) and then lexicographically
      // [sentence, frequency]
      if (a[1] === b[1]) return a[0].localeCompare(b[0]);
      return b[1] - a[1];
    });

    // Return only the top 3 sentences
    return sortedSentences.slice(0, 3).map(entry => entry[0]);
  }

  // Process each character input
  input(c) {
    if (c === '#') {
      // End of sentence, add the current search to the Trie
      this.addSentence(this.currentSearch, 1);
      this.currentSearch = ''; // Reset the current search
      this.currentNode = this.root; // Reset the current node
      return [];
    }

    this.currentSearch += c;

    // If there's no valid node for the current search, return empty result
    if (this.currentNode && this.currentNode.children[c]) {
      this.currentNode = this.currentNode.children[c];
      return this.getTop3(this.currentNode);
    } else {
      // Set the current node to null since no further valid search is possible
      this.currentNode = null;
      return [];
    }
  }
}
