class TrieNode {
  constructor() {
    this.count = 0;
    this.children = {};
  }
}

var MapSum = function () {
  this.root = new TrieNode();
  this.map = new Map();
};

MapSum.prototype.insert = function (key, val) {
  let node = this.root;
  let diff = val;

  if (this.map.has(key)) {
    diff = val - this.map.get(key);
  }

  this.map.set(key, val);

  for (let char of key) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
    node.count += diff;
  }
};


MapSum.prototype.sum = function (prefix) {
  let node = this.root;

  for (let char of prefix) {
    if (!node.children[char]) return 0;
    node = node.children[char];
  }

  return node.count;
};

