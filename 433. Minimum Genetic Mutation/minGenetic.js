var minMutation = function (startGene, endGene, bank) {
  if (bank.indexOf(endGene) === -1) return -1;

  const isValidMutation = (gene1, gene2) => {
    let diffCount = 0;
    for (let i = 0; i < gene1.length; i++) {
      if (gene1[i] !== gene2[i]) {
        diffCount++;
        if (diffCount > 1) return false;
      }
    }
    return diffCount === 1;
  };

  const visited = new Set();
  const queue = [[startGene, 0]];

  while (queue.length > 0) {
    const [currentGene, mutations] = queue.shift();

    if (currentGene === endGene) {
      return mutations;
    }

    for (const nextGene of bank) {
      if (!visited.has(nextGene) && isValidMutation(currentGene, nextGene)) {
        visited.add(nextGene);
        queue.push([nextGene, mutations + 1]);
      }
    }
  }

  return -1;
};