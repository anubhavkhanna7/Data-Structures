class TrieNode {
  constructor() {
    this.children = {}
    this.endOfWord = false
  }
}
var suggestedProducts = function (products, searchWord) {
  let root = new TrieNode();
  let result = [];

  const insertProduct = (word) => {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  };

  for (let product of products) {
    insertProduct(product);
  }

  const dfs = (node, prefix, suggestions) => {
    if (suggestions.length === 3) return;
    if (node.endOfWord) suggestions.push(prefix);

    for (let char of Object.keys(node.children).sort()) {
      dfs(node.children[char], prefix + char, suggestions);
    }
  };

  const getSuggestions = (prefix) => {
    let node = root;
    let suggestions = [];
    for (let char of prefix) {
      if (!node.children[char]) return suggestions;
      node = node.children[char];
    }
    dfs(node, prefix, suggestions);
    return suggestions;
  };

  let prefix = '';
  for (let char of searchWord) {
    prefix += char;
    result.push(getSuggestions(prefix));
  }

  return result;
};