var alienOrder = function (words) {
  let inDegree = new Map()
  let adjacencyList = new Map()

  for (let word of words) {
    for (let char of word) {
      if (!inDegree.has(char)) inDegree.set(char, 0);
      if (!adjacencyList.has(char)) adjacencyList.set(char, new Set());
    }
  }


  // Build the graph
  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    // Check for invalid case where word1 is a prefix of word2 but longer
    if (word1.length > word2.length && word1.startsWith(word2)) {
      return '';
    }

    // Find the first differing character
    let minLength = Math.min(word1.length, word2.length);
    for (let j = 0; j < minLength; j++) {
      let char1 = word1[j];
      let char2 = word2[j];
      if (char1 !== char2) {
        if (!adjacencyList.get(char1).has(char2)) {
          adjacencyList.get(char1).add(char2);
          inDegree.set(char2, inDegree.get(char2) + 1);
        }
        break; // Once a mismatch is found, stop comparing further characters
      }
    }
  }

  let queue = [], retval = []

  for (key of inDegree.keys()) {
    if (inDegree.get(key) === 0) {
      queue.push(key)
    }
  }

  while (queue.length > 0) {
    const key = queue.shift()
    retval.push(key)
    const nodes = [...adjacencyList.get(key)] || []

    nodes.forEach(node => {
      inDegree.set(node, inDegree.get(node) - 1)
      if (inDegree.get(node) === 0) {
        queue.push(node)
      }
    })

  }

  if (retval.length !== inDegree.size) {
    return '';
  }

  return retval.join('')
};