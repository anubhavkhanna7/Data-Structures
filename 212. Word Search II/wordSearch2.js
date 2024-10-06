/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = {};
  }
}

var findWords = function(board, words) {
  let root = new TrieNode();
  
  for (let word of words) {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const isIndexValid = (i, j) => i >= 0 && j >= 0 && i < board.length && j < board[0].length;

  const traverse = (i, j, node, word) => {
    if (node.isEndOfWord) {
      result.add(word);
      node.isEndOfWord = false;
    }

    for (let [rowOffset, colOffset] of directions) {
      let newRow = i + rowOffset;
      let newCol = j + colOffset;

      if (isIndexValid(newRow, newCol) && !visited[newRow][newCol] && node.children[board[newRow][newCol]]) {
        visited[newRow][newCol] = true;
        traverse(newRow, newCol, node.children[board[newRow][newCol]], word + board[newRow][newCol]);
        visited[newRow][newCol] = false;
      }
    }
  };

  const result = new Set();
  const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (root.children[board[i][j]]) {
        visited[i][j] = true;
        traverse(i, j, root.children[board[i][j]], board[i][j]);
        visited[i][j] = false;
      }
    }
  }

  return [...result];
};
