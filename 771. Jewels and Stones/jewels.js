var numJewelsInStones = function(jewels, stones) {
  let jewelSet = new Set(jewels.split('')), count = 0
  stones = stones.split('')
  stones.forEach(stone => {
      if (jewelSet.has(stone)) count++
  })
  return count
};