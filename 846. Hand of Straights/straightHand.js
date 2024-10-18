var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  let countMap = new Map();
  for (let card of hand) {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  }

  hand.sort((a, b) => a - b);

  for (let card of hand) {
    if (countMap.get(card) === 0) continue;

    for (let i = 0; i < groupSize; i++) {
      let currentCard = card + i;
      if (!countMap.has(currentCard) || countMap.get(currentCard) === 0) {
        return false;
      }
      countMap.set(currentCard, countMap.get(currentCard) - 1);
    }
  }

  return true;
};
