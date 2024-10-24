var minDominoRotations = function (tops, bottoms) {
  if (tops.length !== bottoms.length) return -1;

  const countSwaps = (target) => {
    let topSwaps = 0;
    let bottomSwaps = 0;

    for (let i = 0; i < tops.length; i++) {
      if (tops[i] !== target && bottoms[i] !== target) return -1;

      if (tops[i] !== target) topSwaps++;

      if (bottoms[i] !== target) bottomSwaps++;
    }
    return Math.min(topSwaps, bottomSwaps);
  };

  let rotationsForTop = countSwaps(tops[0]);
  let rotationsForBottom = countSwaps(bottoms[0]);

  if (rotationsForTop === -1 && rotationsForBottom === -1) return -1;

  if (rotationsForTop === -1) return rotationsForBottom;
  if (rotationsForBottom === -1) return rotationsForTop;

  return Math.min(rotationsForTop, rotationsForBottom);
};